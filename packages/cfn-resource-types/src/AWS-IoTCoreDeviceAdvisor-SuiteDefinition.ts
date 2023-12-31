import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::IoTCoreDeviceAdvisor::SuiteDefinition`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html}
 */
export type IoTCoreDeviceAdvisorSuiteDefinitionProperties = {
  SuiteDefinitionConfiguration: {
    /**
     * The device permission role arn of the test suite.
     * @minLength `20`
     * @maxLength `2048`
     */
    DevicePermissionRoleArn: string;
    /**
     * The devices being tested in the test suite
     * @minLength `0`
     * @maxLength `2`
     */
    Devices?: DeviceUnderTest[];
    /**
     * Whether the tests are intended for qualification in a suite.
     */
    IntendedForQualification?: boolean;
    /**
     * The root group of the test suite.
     * @minLength `1`
     * @maxLength `2048`
     */
    RootGroup: string;
    /**
     * The Name of the suite definition.
     * @minLength `1`
     * @maxLength `256`
     */
    SuiteDefinitionName?: string;
  };
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::IoTCoreDeviceAdvisor::SuiteDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html#aws-resource-iotcoredeviceadvisor-suitedefinition-return-values}
 */
export type IoTCoreDeviceAdvisorSuiteDefinitionAttributes = {
  /**
   * The Amazon Resource name for the suite definition.
   * @minLength `20`
   * @maxLength `2048`
   */
  SuiteDefinitionArn: string;
  /**
   * The unique identifier for the suite definition.
   * @minLength `12`
   * @maxLength `36`
   */
  SuiteDefinitionId: string;
  /**
   * The suite definition version of a test suite.
   * @minLength `2`
   * @maxLength `255`
   */
  SuiteDefinitionVersion: string;
};
/**
 * Type definition for `AWS::IoTCoreDeviceAdvisor::SuiteDefinition.DeviceUnderTest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-deviceundertest.html}
 */
export type DeviceUnderTest = {
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  CertificateArn?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   */
  ThingArn?: string;
};
/**
 * Type definition for `AWS::IoTCoreDeviceAdvisor::SuiteDefinition.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotcoredeviceadvisor-suitedefinition-tag.html}
 */
export type Tag = {
  /**
   * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Resource type definition for `AWS::IoTCoreDeviceAdvisor::SuiteDefinition`.
 * An example resource schema demonstrating some basic constructs and validation rules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotcoredeviceadvisor-suitedefinition.html}
 */
export class IoTCoreDeviceAdvisorSuiteDefinition extends $Resource<
  "AWS::IoTCoreDeviceAdvisor::SuiteDefinition",
  IoTCoreDeviceAdvisorSuiteDefinitionProperties,
  IoTCoreDeviceAdvisorSuiteDefinitionAttributes
> {
  public static readonly Type = "AWS::IoTCoreDeviceAdvisor::SuiteDefinition";
  constructor(
    logicalId: string,
    properties: IoTCoreDeviceAdvisorSuiteDefinitionProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      IoTCoreDeviceAdvisorSuiteDefinition.Type,
      properties,
      options,
    );
  }
}
