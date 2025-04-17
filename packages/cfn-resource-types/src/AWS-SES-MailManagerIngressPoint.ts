import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SES::MailManagerIngressPoint Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html}
 */
export type SESMailManagerIngressPointProperties = {
  IngressPointConfiguration?: IngressPointConfiguration;
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[A-Za-z0-9_\-]+$`
   */
  IngressPointName?: string;
  NetworkConfiguration?: NetworkConfiguration;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  RuleSetId: string;
  StatusToUpdate?: IngressPointStatusToUpdate;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  TrafficPolicyId: string;
  Type: IngressPointType;
};
/**
 * Attribute type definition for `AWS::SES::MailManagerIngressPoint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#aws-resource-ses-mailmanageringresspoint-return-values}
 */
export type SESMailManagerIngressPointAttributes = {
  ARecord: string;
  IngressPointArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  IngressPointId: string;
  Status: IngressPointStatus;
};
/**
 * Type definition for `AWS::SES::MailManagerIngressPoint.IngressPointConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-ingresspointconfiguration.html}
 */
export type IngressPointConfiguration =
  | {
      /**
       * @minLength `8`
       * @maxLength `64`
       * @pattern `^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{}|.,?]+$`
       */
      SmtpPassword: string;
    }
  | {
      /**
       * @pattern `^arn:(aws|aws-cn|aws-us-gov):secretsmanager:[a-z0-9-]+:\d{12}:secret:[a-zA-Z0-9/_+=,.@-]+$`
       */
      SecretArn: string;
    };
/**
 * Type definition for `AWS::SES::MailManagerIngressPoint.IngressPointStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-ingresspointstatus.html}
 */
export type IngressPointStatus =
  | "PROVISIONING"
  | "DEPROVISIONING"
  | "UPDATING"
  | "ACTIVE"
  | "CLOSED"
  | "FAILED";
/**
 * Type definition for `AWS::SES::MailManagerIngressPoint.IngressPointStatusToUpdate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-ingresspointstatustoupdate.html}
 */
export type IngressPointStatusToUpdate = "ACTIVE" | "CLOSED";
/**
 * Type definition for `AWS::SES::MailManagerIngressPoint.IngressPointType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-ingresspointtype.html}
 */
export type IngressPointType = "OPEN" | "AUTH";
/**
 * Type definition for `AWS::SES::MailManagerIngressPoint.NetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-networkconfiguration.html}
 */
export type NetworkConfiguration =
  | {
      PublicNetworkConfiguration: PublicNetworkConfiguration;
    }
  | {
      PrivateNetworkConfiguration: PrivateNetworkConfiguration;
    };
/**
 * Type definition for `AWS::SES::MailManagerIngressPoint.PrivateNetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-privatenetworkconfiguration.html}
 */
export type PrivateNetworkConfiguration = {
  /**
   * @pattern `^vpce-[a-zA-Z0-9]{17}$`
   */
  VpcEndpointId: string;
};
/**
 * Type definition for `AWS::SES::MailManagerIngressPoint.PublicNetworkConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-publicnetworkconfiguration.html}
 */
export type PublicNetworkConfiguration = {
  IpType: any;
};
/**
 * Type definition for `AWS::SES::MailManagerIngressPoint.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9/_\+=\.:@\-]+$`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   * @pattern `^[a-zA-Z0-9/_\+=\.:@\-]*$`
   */
  Value: string;
};
/**
 * Definition of AWS::SES::MailManagerIngressPoint Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html}
 */
export class SESMailManagerIngressPoint extends $Resource<
  "AWS::SES::MailManagerIngressPoint",
  SESMailManagerIngressPointProperties,
  SESMailManagerIngressPointAttributes
> {
  public static readonly Type = "AWS::SES::MailManagerIngressPoint";
  constructor(
    logicalId: string,
    properties: SESMailManagerIngressPointProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESMailManagerIngressPoint.Type, properties, options);
  }
}
