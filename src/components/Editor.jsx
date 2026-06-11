import React, { useEffect, useRef, useState } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { sql } from '@codemirror/lang-sql';
import { oneDark } from '@codemirror/theme-one-dark';
import ACTIONS from '../../Actions';

const Editor = ({ socketRef, roomId, onCodeChange, language = 'javascript' }) => {
    const editorRef = useRef(null);
    const viewRef = useRef(null);
    const isRemoteUpdate = useRef(false);

    const languageExtensions = {
        javascript: javascript(),
        python: python(),
        html: html(),
        css: css(),
        java: java(),
        cpp: cpp(),
        sql: sql(),
    };

    useEffect(() => {
        const startState = EditorState.create({
            doc: "",
            extensions: [
                basicSetup,
                languageExtensions[language] || javascript(),
                oneDark,
                EditorView.updateListener.of((update) => {
                    if (update.docChanged && !isRemoteUpdate.current) {
                        const code = update.state.doc.toString();
                        onCodeChange(code);
                        socketRef.current?.emit(ACTIONS.CODE_CHANGE, {
                            roomId,
                            code,
                        });
                    }
                })
            ],
        });

        const view = new EditorView({
            state: startState,
            parent: editorRef.current,
        });

        viewRef.current = view;

        return () => {
            view.destroy();
        };
    }, [language]);

    useEffect(() => {
        if (socketRef.current) {
            socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
                if (viewRef.current) {
                    isRemoteUpdate.current = true;
                    const currentCode = viewRef.current.state.doc.toString();
                    if (code !== currentCode) {
                        viewRef.current.dispatch({
                            changes: { from: 0, to: currentCode.length, insert: code }
                        });
                    }
                    isRemoteUpdate.current = false;
                }
            });

            socketRef.current.on(ACTIONS.SYNC_CODE, ({ code }) => {
                if (viewRef.current && code) {
                    isRemoteUpdate.current = true;
                    viewRef.current.dispatch({
                        changes: { from: 0, to: viewRef.current.state.doc.length, insert: code }
                    });
                    isRemoteUpdate.current = false;
                    onCodeChange(code);
                }
            });
        }

        return () => {
            socketRef.current?.off(ACTIONS.CODE_CHANGE);
            socketRef.current?.off(ACTIONS.SYNC_CODE);
        };
    }, [socketRef.current]);

    return <div ref={editorRef} className="editor-container"></div>;
};

export default Editor;
