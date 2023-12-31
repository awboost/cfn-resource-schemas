import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Connect::HoursOfOperation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html}
 */
export type ConnectHoursOfOperationProperties = {
  /**
   * Configuration information for the hours of operation: day, start time, and end time.
   * @maxLength `100`
   */
  Config: HoursOfOperationConfig[];
  /**
   * The description of the hours of operation.
   * @minLength `1`
   * @maxLength `250`
   */
  Description?: string;
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * The name of the hours of operation.
   * @minLength `1`
   * @maxLength `127`
   */
  Name: string;
  /**
   * One or more tags.
   * @maxLength `50`
   */
  Tags?: Tag[];
  /**
   * The time zone of the hours of operation.
   */
  TimeZone: string;
};
/**
 * Attribute type definition for `AWS::Connect::HoursOfOperation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#aws-resource-connect-hoursofoperation-return-values}
 */
export type ConnectHoursOfOperationAttributes = {
  /**
   * The Amazon Resource Name (ARN) for the hours of operation.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*operating-hours/[-a-zA-Z0-9]*$`
   */
  HoursOfOperationArn: string;
};
/**
 * Type definition for `AWS::Connect::HoursOfOperation.HoursOfOperationConfig`.
 * Contains information about the hours of operation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationconfig.html}
 */
export type HoursOfOperationConfig = {
  /**
   * The day that the hours of operation applies to.
   */
  Day:
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY";
  /**
   * The end time that your contact center closes.
   */
  EndTime: HoursOfOperationTimeSlice;
  /**
   * The start time that your contact center opens.
   */
  StartTime: HoursOfOperationTimeSlice;
};
/**
 * Type definition for `AWS::Connect::HoursOfOperation.HoursOfOperationTimeSlice`.
 * The start time or end time for an hours of operation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-hoursofoperationtimeslice.html}
 */
export type HoursOfOperationTimeSlice = {
  /**
   * The hours.
   * @max `23`
   */
  Hours: number;
  /**
   * The minutes.
   * @max `59`
   */
  Minutes: number;
};
/**
 * Type definition for `AWS::Connect::HoursOfOperation.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-hoursofoperation-tag.html}
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
 * Resource Type definition for AWS::Connect::HoursOfOperation
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html}
 */
export class ConnectHoursOfOperation extends $Resource<
  "AWS::Connect::HoursOfOperation",
  ConnectHoursOfOperationProperties,
  ConnectHoursOfOperationAttributes
> {
  public static readonly Type = "AWS::Connect::HoursOfOperation";
  public static readonly AttributeNames = ["HoursOfOperationArn" as const];
  constructor(
    logicalId: string,
    properties: ConnectHoursOfOperationProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      ConnectHoursOfOperation.Type,
      properties,
      ConnectHoursOfOperation.AttributeNames,
      options,
    );
  }
}
