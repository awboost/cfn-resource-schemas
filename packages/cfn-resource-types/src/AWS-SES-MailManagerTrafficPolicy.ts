import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SES::MailManagerTrafficPolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html}
 */
export type SESMailManagerTrafficPolicyProperties = {
  DefaultAction: AcceptAction;
  /**
   * @min `1`
   */
  MaxMessageSizeBytes?: number;
  PolicyStatements: PolicyStatement[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
  /**
   * @minLength `3`
   * @maxLength `63`
   * @pattern `^[A-Za-z0-9_\-]+$`
   */
  TrafficPolicyName?: string;
};
/**
 * Attribute type definition for `AWS::SES::MailManagerTrafficPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#aws-resource-ses-mailmanagertrafficpolicy-return-values}
 */
export type SESMailManagerTrafficPolicyAttributes = {
  TrafficPolicyArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  TrafficPolicyId: string;
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.AcceptAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-acceptaction.html}
 */
export type AcceptAction = "ALLOW" | "DENY";
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressAnalysis`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressanalysis.html}
 */
export type IngressAnalysis = {
  /**
   * @pattern `^[a-zA-Z0-9:_/+=,@.#-]+$`
   */
  Analyzer: string;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(addon\.)?[\sa-zA-Z0-9_]+$`
   */
  ResultField: string;
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressBooleanExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressbooleanexpression.html}
 */
export type IngressBooleanExpression = {
  Evaluate: IngressBooleanToEvaluate;
  Operator: IngressBooleanOperator;
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressBooleanOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressbooleanoperator.html}
 */
export type IngressBooleanOperator = "IS_TRUE" | "IS_FALSE";
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressBooleanToEvaluate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressbooleantoevaluate.html}
 */
export type IngressBooleanToEvaluate = {
  Analysis: IngressAnalysis;
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressIpOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressipoperator.html}
 */
export type IngressIpOperator = "CIDR_MATCHES" | "NOT_CIDR_MATCHES";
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressIpToEvaluate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressiptoevaluate.html}
 */
export type IngressIpToEvaluate = {
  Attribute: IngressIpv4Attribute;
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressIpv4Attribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressipv4attribute.html}
 */
export type IngressIpv4Attribute = "SENDER_IP";
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressIpv4Expression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressipv4expression.html}
 */
export type IngressIpv4Expression = {
  Evaluate: IngressIpToEvaluate;
  Operator: IngressIpOperator;
  Values: string[];
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressIpv6Attribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressipv6attribute.html}
 */
export type IngressIpv6Attribute = "SENDER_IPV6";
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressIpv6Expression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressipv6expression.html}
 */
export type IngressIpv6Expression = {
  Evaluate: IngressIpv6ToEvaluate;
  Operator: IngressIpOperator;
  Values: string[];
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressIpv6ToEvaluate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressipv6toevaluate.html}
 */
export type IngressIpv6ToEvaluate = {
  Attribute: IngressIpv6Attribute;
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressStringEmailAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressstringemailattribute.html}
 */
export type IngressStringEmailAttribute = "RECIPIENT";
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressStringExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressstringexpression.html}
 */
export type IngressStringExpression = {
  Evaluate: IngressStringToEvaluate;
  Operator: IngressStringOperator;
  Values: string[];
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressStringOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressstringoperator.html}
 */
export type IngressStringOperator =
  | "EQUALS"
  | "NOT_EQUALS"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS";
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressStringToEvaluate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressstringtoevaluate.html}
 */
export type IngressStringToEvaluate =
  | {
      Attribute: IngressStringEmailAttribute;
    }
  | {
      Analysis: IngressAnalysis;
    };
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressTlsAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsattribute.html}
 */
export type IngressTlsAttribute = "TLS_PROTOCOL";
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressTlsProtocolAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocolattribute.html}
 */
export type IngressTlsProtocolAttribute = "TLS1_2" | "TLS1_3";
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressTlsProtocolExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression.html}
 */
export type IngressTlsProtocolExpression = {
  Evaluate: IngressTlsProtocolToEvaluate;
  Operator: IngressTlsProtocolOperator;
  Value: IngressTlsProtocolAttribute;
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressTlsProtocolOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocoloperator.html}
 */
export type IngressTlsProtocolOperator = "MINIMUM_TLS_VERSION" | "IS";
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.IngressTlsProtocolToEvaluate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocoltoevaluate.html}
 */
export type IngressTlsProtocolToEvaluate = {
  Attribute: IngressTlsAttribute;
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.PolicyCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-policycondition.html}
 */
export type PolicyCondition =
  | {
      StringExpression: IngressStringExpression;
    }
  | {
      IpExpression: IngressIpv4Expression;
    }
  | {
      Ipv6Expression: IngressIpv6Expression;
    }
  | {
      TlsExpression: IngressTlsProtocolExpression;
    }
  | {
      BooleanExpression: IngressBooleanExpression;
    };
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.PolicyStatement`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-policystatement.html}
 */
export type PolicyStatement = {
  Action: AcceptAction;
  /**
   * @minLength `1`
   */
  Conditions: PolicyCondition[];
};
/**
 * Type definition for `AWS::SES::MailManagerTrafficPolicy.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-tag.html}
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
 * Definition of AWS::SES::MailManagerTrafficPolicy Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html}
 */
export class SESMailManagerTrafficPolicy extends $Resource<
  "AWS::SES::MailManagerTrafficPolicy",
  SESMailManagerTrafficPolicyProperties,
  SESMailManagerTrafficPolicyAttributes
> {
  public static readonly Type = "AWS::SES::MailManagerTrafficPolicy";
  constructor(
    logicalId: string,
    properties: SESMailManagerTrafficPolicyProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESMailManagerTrafficPolicy.Type, properties, options);
  }
}
