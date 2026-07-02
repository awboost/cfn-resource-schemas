import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::TestCase
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-testcase.html}
 */
export type ConnectTestCaseProperties = {
  /**
   * The content of the test case.
   * @minLength `1`
   * @maxLength `256000`
   */
  Content: string;
  /**
   * The description of the test case.
   * @maxLength `500`
   * @pattern `.*\S.*`
   */
  Description?: string;
  /**
   * Entry point for Testcase.
   */
  EntryPoint?: EntryPoint;
  /**
   * The initialization data of the test case.
   * @minLength `1`
   * @maxLength `256000`
   */
  InitializationData?: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the test case.
   * @minLength `1`
   * @maxLength `127`
   * @pattern `.*\S.*`
   */
  Name: string;
  /**
   * The status of the test case.
   */
  Status?: "SAVED" | "PUBLISHED";
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Connect::TestCase`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-testcase.html#aws-resource-connect-testcase-return-values}
 */
export type ConnectTestCaseAttributes = {
  /**
   * Last modified region.
   * @pattern `[a-z]{2}(-[a-z]+){1,2}(-[0-9])?`
   */
  LastModifiedRegion: string;
  /**
   * Last modified time.
   */
  LastModifiedTime: number;
  /**
   * The identifier of the test case.
   * @minLength `1`
   * @maxLength `500`
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*test-case/[-a-zA-Z0-9]*$`
   */
  TestCaseArn: string;
};
/**
 * Type definition for `AWS::Connect::TestCase.EntryPoint`.
 * The Entry Point associated with the test case
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-testcase-entrypoint.html}
 */
export type EntryPoint = {
  /**
   * The chat entry point parameters for the test case
   */
  ChatEntryPointParameters?: {
    /**
     * The flow id used for the TestCase
     * @minLength `1`
     * @maxLength `256`
     */
    FlowId?: string;
  };
  /**
   * The type of the Entry Point
   */
  Type?: "VOICE_CALL" | "CHAT";
  /**
   * The voice call entry point parameters for the test case
   */
  VoiceCallEntryPointParameters?: {
    /**
     * The destination phonenumber of the EntryPoint
     */
    DestinationPhoneNumber?: string;
    /**
     * The flow id used for the TestCase
     */
    FlowId?: string;
    /**
     * The source phonenumber of the EntryPoint
     */
    SourcePhoneNumber?: string;
  };
};
/**
 * Type definition for `AWS::Connect::TestCase.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-testcase-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^(?!aws:)[a-zA-Z+-=._:/]+$`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource Type definition for AWS::Connect::TestCase
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-testcase.html}
 */
export class ConnectTestCase extends $Resource<
  "AWS::Connect::TestCase",
  ConnectTestCaseProperties,
  ConnectTestCaseAttributes
> {
  public static readonly Type = "AWS::Connect::TestCase";
  constructor(
    logicalId: string,
    properties: ConnectTestCaseProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectTestCase.Type, properties, options);
  }
}
