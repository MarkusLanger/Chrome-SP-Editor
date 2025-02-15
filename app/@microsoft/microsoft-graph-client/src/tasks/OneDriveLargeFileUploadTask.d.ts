/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/// <reference types="node" />
import { Client } from "../index";
import { UploadEventHandlers } from "./FileUploadTask/Interfaces/IUploadEventHandlers";
import { FileObject, LargeFileUploadSession, LargeFileUploadTask, LargeFileUploadTaskOptions } from "./LargeFileUploadTask";
/**
 * @interface
 * Signature to define options when creating an upload task
 * @property {string} fileName - Specifies the name of a file to be uploaded (with extension)
 * @property {string} [path] - The path to which the file needs to be uploaded
 * @property {number} [rangeSize] - Specifies the range chunk size
 */
export interface OneDriveLargeFileUploadOptions {
    fileName: string;
    path?: string;
    rangeSize?: number;
    conflictBehavior?: string;
    uploadEventHandlers?: UploadEventHandlers;
}
/**
 * @interface
 * Signature to define options when creating an upload task
 * @property {string} fileName - Specifies the name of a file to be uploaded (with extension)
 * @property {string} [path] - The path to which the file needs to be uploaded
 * @property {number} [rangeSize] - Specifies the range chunk size
 */
interface OneDriveFileUploadSessionPayLoad {
    fileName: string;
    conflictBehavior?: string;
}
/**
 * @class
 * Class representing OneDriveLargeFileUploadTask
 */
export declare class OneDriveLargeFileUploadTask<T> extends LargeFileUploadTask<T> {
    /**
     * @private
     * @static
     * Default path for the file being uploaded
     */
    private static DEFAULT_UPLOAD_PATH;
    /**
     * @private
     * @static
     * Constructs the create session url for Onedrive
     * @param {string} fileName - The name of the file
     * @param {path} [path = OneDriveLargeFileUploadTask.DEFAULT_UPLOAD_PATH] - The path for the upload
     * @returns The constructed create session url
     */
    private static constructCreateSessionUrl;
    /**
     * @public
     * @static
     * @async
     * Creates a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {Blob | Buffer | File} file - File represented as Blob, Buffer or File
     * @param {OneDriveLargeFileUploadOptions} options - The options for upload task
     * @returns The promise that will be resolves to OneDriveLargeFileUploadTask instance
     */
    static create(client: Client, file: Blob | Buffer | File, options: OneDriveLargeFileUploadOptions): Promise<OneDriveLargeFileUploadTask<Blob | ArrayBuffer | Buffer>>;
    /**
     * @public
     * @static
     * @async
     * Creates a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - FileObject instance
     * @param {OneDriveLargeFileUploadOptions} options - The options for upload task
     * @returns The promise that will be resolves to OneDriveLargeFileUploadTask instance
     */
    static createTaskWithFileObject<T>(client: Client, fileObject: FileObject<T>, options: OneDriveLargeFileUploadOptions): Promise<OneDriveLargeFileUploadTask<T>>;
    /**
     * @public
     * @static
     * @async
     * Makes request to the server to create an upload session
     * @param {Client} client - The GraphClient instance
     * @param {string} requestUrl - The URL to create the upload session
     * @param {string} fileName - The name of a file to upload, (with extension)
     * @param {string} conflictBehavior - Conflict behaviour option. Default is 'rename'
     * @returns The promise that resolves to LargeFileUploadSession
     */
    static createUploadSession(client: Client, requestUrl: string, payloadOptions: OneDriveFileUploadSessionPayLoad): Promise<LargeFileUploadSession>;
    /**
     * @public
     * @constructor
     * Constructs a OneDriveLargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task options
     * @returns An instance of OneDriveLargeFileUploadTask
     */
    constructor(client: Client, file: FileObject<T>, uploadSession: LargeFileUploadSession, options: LargeFileUploadTaskOptions);
    /**
     * @public
     * Commits upload session to end uploading
     * @param {string} requestUrl - The URL to commit the upload session
     * @param {string} conflictBehavior - Conflict behaviour option. Default is 'rename'
     * @returns The promise resolves to committed response
     */
    commit(requestUrl: string, conflictBehavior?: string): Promise<unknown>;
}
export {};
