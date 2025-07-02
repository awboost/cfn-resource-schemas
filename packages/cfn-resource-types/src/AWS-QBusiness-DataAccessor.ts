import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::QBusiness::DataAccessor Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html}
 */
export type QBusinessDataAccessorProperties = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  ActionConfigurations: ActionConfiguration[];
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  ApplicationId: string;
  AuthenticationDetail?: DataAccessorAuthenticationDetail;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`
   */
  DisplayName: string;
  /**
   * @minLength `1`
   * @maxLength `1284`
   * @pattern `^arn:aws:iam::[0-9]{12}:role/[a-zA-Z0-9_/+=,.@-]+$`
   */
  Principal: string;
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::QBusiness::DataAccessor`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#aws-resource-qbusiness-dataaccessor-return-values}
 */
export type QBusinessDataAccessorAttributes = {
  CreatedAt: string;
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   */
  DataAccessorArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
   */
  DataAccessorId: string;
  /**
   * @minLength `10`
   * @maxLength `1224`
   * @pattern `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::\d{12}:application/(sso)?ins-[a-zA-Z0-9-.]{16}/apl-[a-zA-Z0-9]{16}$`
   */
  IdcApplicationArn: string;
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::QBusiness::DataAccessor.ActionConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-actionconfiguration.html}
 */
export type ActionConfiguration = {
  /**
   * @pattern `^qbusiness:[a-zA-Z]+$`
   */
  Action: string;
  FilterConfiguration?: ActionFilterConfiguration;
};
/**
 * Type definition for `AWS::QBusiness::DataAccessor.ActionFilterConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-actionfilterconfiguration.html}
 */
export type ActionFilterConfiguration = {
  DocumentAttributeFilter: AttributeFilter;
};
/**
 * Type definition for `AWS::QBusiness::DataAccessor.AttributeFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-attributefilter.html}
 */
export type AttributeFilter = {
  AndAllFilters?: AttributeFilter[];
  ContainsAll?: DocumentAttribute;
  ContainsAny?: DocumentAttribute;
  EqualsTo?: DocumentAttribute;
  GreaterThan?: DocumentAttribute;
  GreaterThanOrEquals?: DocumentAttribute;
  LessThan?: DocumentAttribute;
  LessThanOrEquals?: DocumentAttribute;
  NotFilter?: AttributeFilter;
  OrAllFilters?: AttributeFilter[];
};
/**
 * Type definition for `AWS::QBusiness::DataAccessor.DataAccessorAuthenticationConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-dataaccessorauthenticationconfiguration.html}
 */
export type DataAccessorAuthenticationConfiguration = {
  IdcTrustedTokenIssuerConfiguration: DataAccessorIdcTrustedTokenIssuerConfiguration;
};
/**
 * Type definition for `AWS::QBusiness::DataAccessor.DataAccessorAuthenticationDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-dataaccessorauthenticationdetail.html}
 */
export type DataAccessorAuthenticationDetail = {
  AuthenticationConfiguration?: DataAccessorAuthenticationConfiguration;
  AuthenticationType: DataAccessorAuthenticationType;
  /**
   * @minLength `1`
   * @maxLength `1`
   */
  ExternalIds?: string[];
};
/**
 * Type definition for `AWS::QBusiness::DataAccessor.DataAccessorAuthenticationType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-dataaccessorauthenticationtype.html}
 */
export type DataAccessorAuthenticationType =
  | "AWS_IAM_IDC_TTI"
  | "AWS_IAM_IDC_AUTH_CODE";
/**
 * Type definition for `AWS::QBusiness::DataAccessor.DataAccessorIdcTrustedTokenIssuerConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-dataaccessoridctrustedtokenissuerconfiguration.html}
 */
export type DataAccessorIdcTrustedTokenIssuerConfiguration = {
  /**
   * @minLength `0`
   * @maxLength `1284`
   * @pattern `^arn:aws:sso::[0-9]{12}:trustedTokenIssuer/(sso)?ins-[a-zA-Z0-9-.]{16}/tti-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   */
  IdcTrustedTokenIssuerArn: string;
};
/**
 * Type definition for `AWS::QBusiness::DataAccessor.DocumentAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-documentattribute.html}
 */
export type DocumentAttribute = {
  /**
   * @minLength `1`
   * @maxLength `200`
   * @pattern `^[a-zA-Z0-9_][a-zA-Z0-9_-]*$`
   */
  Name: string;
  Value: DocumentAttributeValue;
};
/**
 * Type definition for `AWS::QBusiness::DataAccessor.DocumentAttributeValue`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-documentattributevalue.html}
 */
export type DocumentAttributeValue =
  | {
      /**
       * @maxLength `2048`
       */
      StringValue: string;
    }
  | {
      StringListValue: string[];
    }
  | {
      LongValue: number;
    }
  | {
      DateValue: string;
    };
/**
 * Type definition for `AWS::QBusiness::DataAccessor.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-qbusiness-dataaccessor-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key: string;
  /**
   * @minLength `0`
   * @maxLength `256`
   */
  Value: string;
};
/**
 * Definition of AWS::QBusiness::DataAccessor Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html}
 */
export class QBusinessDataAccessor extends $Resource<
  "AWS::QBusiness::DataAccessor",
  QBusinessDataAccessorProperties,
  QBusinessDataAccessorAttributes
> {
  public static readonly Type = "AWS::QBusiness::DataAccessor";
  constructor(
    logicalId: string,
    properties: QBusinessDataAccessorProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, QBusinessDataAccessor.Type, properties, options);
  }
}
