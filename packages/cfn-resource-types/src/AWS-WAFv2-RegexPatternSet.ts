import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for `AWS::WAFv2::RegexPatternSet`.
 * Contains a list of Regular expressions based on the provided inputs. RegexPatternSet can be used with other WAF entities with RegexPatternSetReferenceStatement to perform other actions .
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html}
 */
export type WAFv2RegexPatternSetProperties = {
  /**
   * Description of the entity.
   * @pattern `^[a-zA-Z0-9=:#@/\-,.][a-zA-Z0-9+=:#@/\-,.\s]+[a-zA-Z0-9+=:#@/\-,.]{1,256}$`
   */
  Description?: string;
  /**
   * Name of the RegexPatternSet.
   * @pattern `^[0-9A-Za-z_-]{1,128}$`
   */
  Name?: string;
  RegularExpressionList: string[];
  /**
   * Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway.
   */
  Scope: "CLOUDFRONT" | "REGIONAL";
  /**
   * @minLength `1`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::WAFv2::RegexPatternSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#aws-resource-wafv2-regexpatternset-return-values}
 */
export type WAFv2RegexPatternSetAttributes = {
  /**
   * ARN of the WAF entity.
   */
  Arn: string;
  /**
   * Id of the RegexPatternSet
   * @pattern `^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$`
   */
  Id: string;
};
/**
 * Type definition for `AWS::WAFv2::RegexPatternSet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-regexpatternset-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  Key?: string;
  /**
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource type definition for `AWS::WAFv2::RegexPatternSet`.
 * Contains a list of Regular expressions based on the provided inputs. RegexPatternSet can be used with other WAF entities with RegexPatternSetReferenceStatement to perform other actions .
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html}
 */
export class WAFv2RegexPatternSet extends $Resource<
  "AWS::WAFv2::RegexPatternSet",
  WAFv2RegexPatternSetProperties,
  WAFv2RegexPatternSetAttributes
> {
  public static readonly Type = "AWS::WAFv2::RegexPatternSet";
  public static readonly AttributeNames = ["Arn" as const, "Id" as const];
  constructor(
    logicalId: string,
    properties: WAFv2RegexPatternSetProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      WAFv2RegexPatternSet.Type,
      properties,
      WAFv2RegexPatternSet.AttributeNames,
      options,
    );
  }
}
