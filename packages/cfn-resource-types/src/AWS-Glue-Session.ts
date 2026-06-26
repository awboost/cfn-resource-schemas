import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Glue::Session. Sessions provide an on-demand, serverless Apache Spark runtime environment for building, testing, and running data preparation and analytics applications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-session.html}
 */
export type GlueSessionProperties = {
  /**
   * The SessionCommand that runs the job.
   */
  Command: SessionCommand;
  /**
   * Specifies the connections used by the session.
   */
  Connections?: ConnectionsList;
  /**
   * A map array of key-value pairs. Max is 75 pairs.
   */
  DefaultArguments?: Record<string, string>;
  /**
   * The description of the session.
   * @minLength `0`
   * @maxLength `2048`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*$`
   */
  Description?: string;
  /**
   * The Glue version determines the versions of Apache Spark and Python that Glue supports. The GlueVersion must be greater than 2.0.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^(\w+\.)+\w+$`
   */
  GlueVersion?: string;
  /**
   * The ID of the session.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*$`
   */
  Id: string;
  /**
   * The number of minutes when idle before session times out. Default is the value of Timeout.
   */
  IdleTimeout?: number;
  /**
   * The number of Glue data processing units (DPUs) that can be allocated when the job runs.
   */
  MaxCapacity?: number;
  /**
   * The number of workers of a defined WorkerType to use for the session.
   */
  NumberOfWorkers?: number;
  /**
   * The origin of the request.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[.\-_A-Za-z0-9]+$`
   */
  RequestOrigin?: string;
  /**
   * The IAM Role ARN.
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^arn:aws[^:]*:iam::[0-9]*:role/.+$`
   */
  Role: string;
  /**
   * The name of the SecurityConfiguration structure to be used with the session.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*$`
   */
  SecurityConfiguration?: string;
  /**
   * The tags belonging to the session.
   * @minLength `0`
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The number of minutes before session times out.
   * @min `1`
   */
  Timeout?: number;
  /**
   * The type of predefined worker that is allocated when a session runs.
   */
  WorkerType?:
    | "Standard"
    | "G.1X"
    | "G.2X"
    | "G.025X"
    | "G.4X"
    | "G.8X"
    | "Z.2X";
};
/**
 * Attribute type definition for `AWS::Glue::Session`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-session.html#aws-resource-glue-session-return-values}
 */
export type GlueSessionAttributes = {
  /**
   * The Amazon Resource Name (ARN) of the session.
   */
  Arn: string;
  /**
   * The time and date when the session was created.
   */
  CreatedOn: string;
  /**
   * The code execution progress of the session.
   */
  Progress: number;
  /**
   * The session status.
   */
  Status:
    | "PROVISIONING"
    | "READY"
    | "FAILED"
    | "TIMEOUT"
    | "STOPPING"
    | "STOPPED";
};
/**
 * Type definition for `AWS::Glue::Session.ConnectionsList`.
 * Specifies the connections used by the session.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-session-connectionslist.html}
 */
export type ConnectionsList = {
  /**
   * A list of connection names used by the session.
   * @minLength `0`
   * @maxLength `1000`
   */
  Connections?: string[];
};
/**
 * Type definition for `AWS::Glue::Session.SessionCommand`.
 * The SessionCommand that runs the job.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-session-sessioncommand.html}
 */
export type SessionCommand = {
  /**
   * Specifies the name of the SessionCommand. Can be 'glueetl' or 'gluestreaming'.
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*$`
   */
  Name?: string;
  /**
   * Specifies the Python version. The Python version indicates the version supported for jobs of type Spark.
   * @pattern `^([2-3]|3[.]9)$`
   */
  PythonVersion?: string;
};
/**
 * Type definition for `AWS::Glue::Session.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-session-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Glue::Session. Sessions provide an on-demand, serverless Apache Spark runtime environment for building, testing, and running data preparation and analytics applications.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-session.html}
 */
export class GlueSession extends $Resource<
  "AWS::Glue::Session",
  GlueSessionProperties,
  GlueSessionAttributes
> {
  public static readonly Type = "AWS::Glue::Session";
  constructor(
    logicalId: string,
    properties: GlueSessionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, GlueSession.Type, properties, options);
  }
}
