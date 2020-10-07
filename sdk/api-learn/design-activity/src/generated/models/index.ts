/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export type ComputeNodeUnion =
  | ComputeNode
  | LinuxComputeNode
  | WindowsComputeNode;

export interface PageOfComputeNodes {
  value: ComputeNodeUnion[];
  nextLink?: string;
}

export interface ComputeNode {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  kind: "LinuxComputeNode" | "WindowsComputeNode";
  readonly eTag?: string;
  readonly name?: string;
}

export interface Operation {
  readonly createdDateTime?: Date;
  readonly percentComplete?: number;
  readonly status?: OperationStatus;
}

export type LinuxComputeNode = ComputeNode & {
  sshPublicKey: string;
};

export type WindowsComputeNode = ComputeNode & {
  userName: string;
};

/**
 * Defines headers for Computations_computePi operation.
 */
export interface ComputationsComputePiHeaders {
  /**
   * This will point to an operation (/operations/{operationId}) that can be used to monitor the progress
   */
  operationLocation?: string;
}

/**
 * Defines headers for GeneratedClient_computation operation.
 */
export interface GeneratedClientComputationHeaders {
  location?: string;
}

/**
 * Defines values for OperationStatus.
 */
export type OperationStatus =
  | "notstarted"
  | "running"
  | "succeeded"
  | "failed"
  | "cancelled"
  | string;

/**
 * Contains response data for the list operation.
 */
export type ComputeNodeAdministrationListResponse = PageOfComputeNodes & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: PageOfComputeNodes;
  };
};

/**
 * Optional parameters.
 */
export interface ComputeNodeAdministrationCreateOptionalParams
  extends coreHttp.OperationOptions {
  computeNode?: ComputeNodeUnion;
  ifMatch?: string;
}

/**
 * Contains response data for the create operation.
 */
export type ComputeNodeAdministrationCreateResponse = ComputeNodeUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ComputeNodeUnion;
  };
};

/**
 * Contains response data for the get operation.
 */
export type ComputeNodeAdministrationGetResponse = ComputeNodeUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ComputeNodeUnion;
  };
};

/**
 * Optional parameters.
 */
export interface ComputationsComputePiOptionalParams
  extends coreHttp.OperationOptions {
  precision?: number;
}

/**
 * Contains response data for the computePi operation.
 */
export type ComputationsComputePiResponse = ComputationsComputePiHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: ComputationsComputePiHeaders;
  };
};

/**
 * Contains response data for the computation operation.
 */
export type GeneratedClientComputationResponse = GeneratedClientComputationHeaders &
  Operation & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Operation;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: GeneratedClientComputationHeaders;
    };
  };

/**
 * Optional parameters.
 */
export interface GeneratedClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * Optional client-provided request id
   */
  xMsClientRequestId?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
