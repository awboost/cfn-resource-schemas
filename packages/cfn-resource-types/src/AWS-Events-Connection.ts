import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Events::Connection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html}
 */
export type EventsConnectionProperties = {
  AuthParameters?: AuthParameters;
  AuthorizationType?: "API_KEY" | "BASIC" | "OAUTH_CLIENT_CREDENTIALS";
  /**
   * Description of the connection.
   * @maxLength `512`
   */
  Description?: string;
  /**
   * Name of the connection.
   * @minLength `1`
   * @maxLength `64`
   * @pattern `[\.\-_A-Za-z0-9]+`
   */
  Name?: string;
};
/**
 * Attribute type definition for `AWS::Events::Connection`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#aws-resource-events-connection-return-values}
 */
export type EventsConnectionAttributes = {
  /**
   * The arn of the connection resource.
   * @pattern `^arn:aws([a-z]|\-)*:events:([a-z]|\d|\-)*:([0-9]{12})?:connection\/[\.\-_A-Za-z0-9]+\/[\-A-Za-z0-9]+$`
   */
  Arn: string;
  /**
   * The arn of the secrets manager secret created in the customer account.
   * @pattern `^arn:aws([a-z]|\-)*:secretsmanager:([a-z]|\d|\-)*:([0-9]{12})?:secret:([a-z]|\d|\-)*(!)*[\/_+=\.@\-A-Za-z0-9]+$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::Events::Connection.ApiKeyAuthParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-apikeyauthparameters.html}
 */
export type ApiKeyAuthParameters = {
  /**
   * @pattern `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
   */
  ApiKeyName: string;
  /**
   * @pattern `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
   */
  ApiKeyValue: string;
};
/**
 * Type definition for `AWS::Events::Connection.AuthParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-authparameters.html}
 */
export type AuthParameters = {
  ApiKeyAuthParameters?: ApiKeyAuthParameters;
  BasicAuthParameters?: BasicAuthParameters;
  InvocationHttpParameters?: ConnectionHttpParameters;
  OAuthParameters?: OAuthParameters;
};
/**
 * Type definition for `AWS::Events::Connection.BasicAuthParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-basicauthparameters.html}
 */
export type BasicAuthParameters = {
  /**
   * @pattern `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
   */
  Password: string;
  /**
   * @pattern `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
   */
  Username: string;
};
/**
 * Type definition for `AWS::Events::Connection.ClientParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-clientparameters.html}
 */
export type ClientParameters = {
  /**
   * @pattern `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
   */
  ClientID: string;
  /**
   * @pattern `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
   */
  ClientSecret: string;
};
/**
 * Type definition for `AWS::Events::Connection.ConnectionHttpParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-connectionhttpparameters.html}
 */
export type ConnectionHttpParameters = {
  BodyParameters?: Parameter[];
  HeaderParameters?: Parameter[];
  QueryStringParameters?: Parameter[];
};
/**
 * Type definition for `AWS::Events::Connection.OAuthParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-oauthparameters.html}
 */
export type OAuthParameters = {
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^((%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@\x26=+$,A-Za-z0-9])+)([).!';/?:,])?$`
   */
  AuthorizationEndpoint: string;
  ClientParameters: ClientParameters;
  HttpMethod: "GET" | "POST" | "PUT";
  OAuthHttpParameters?: ConnectionHttpParameters;
};
/**
 * Type definition for `AWS::Events::Connection.Parameter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-parameter.html}
 */
export type Parameter = {
  IsValueSecret?: boolean;
  Key: string;
  Value: string;
};
/**
 * Resource Type definition for AWS::Events::Connection.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html}
 */
export class EventsConnection extends $Resource<
  "AWS::Events::Connection",
  EventsConnectionProperties,
  EventsConnectionAttributes
> {
  public static readonly Type = "AWS::Events::Connection";
  constructor(
    logicalId: string,
    properties: EventsConnectionProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EventsConnection.Type, properties, options);
  }
}
