import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::SES::MailManagerRuleSet Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html}
 */
export type SESMailManagerRuleSetProperties = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  RuleSetName?: string;
  /**
   * @minLength `0`
   * @maxLength `40`
   */
  Rules: Rule[];
  /**
   * @minLength `0`
   * @maxLength `200`
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::SES::MailManagerRuleSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#aws-resource-ses-mailmanagerruleset-return-values}
 */
export type SESMailManagerRuleSetAttributes = {
  RuleSetArn: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  RuleSetId: string;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.ActionFailurePolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-actionfailurepolicy.html}
 */
export type ActionFailurePolicy = "CONTINUE" | "DROP";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.AddHeaderAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-addheaderaction.html}
 */
export type AddHeaderAction = {
  /**
   * @minLength `1`
   * @maxLength `64`
   * @pattern `^[xX]\-[a-zA-Z0-9\-]+$`
   */
  HeaderName: string;
  /**
   * @minLength `1`
   * @maxLength `128`
   */
  HeaderValue: string;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.Analysis`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-analysis.html}
 */
export type Analysis = {
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
 * Type definition for `AWS::SES::MailManagerRuleSet.ArchiveAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-archiveaction.html}
 */
export type ArchiveAction = {
  ActionFailurePolicy?: ActionFailurePolicy;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9:_/+=,@.#-]+$`
   */
  TargetArchive: string;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.DeliverToMailboxAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertomailboxaction.html}
 */
export type DeliverToMailboxAction = {
  ActionFailurePolicy?: ActionFailurePolicy;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9:_/+=,@.#-]+$`
   */
  MailboxArn: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9:_/+=,@.#-]+$`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.DeliverToQBusinessAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertoqbusinessaction.html}
 */
export type DeliverToQBusinessAction = {
  ActionFailurePolicy?: ActionFailurePolicy;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-z0-9-]+$`
   */
  ApplicationId: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^[a-z0-9-]+$`
   */
  IndexId: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9:_/+=,@.#-]+$`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.DropAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-dropaction.html}
 */
export type DropAction = Record<string, any>;
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.MailFrom`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-mailfrom.html}
 */
export type MailFrom = "REPLACE" | "PRESERVE";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RelayAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-relayaction.html}
 */
export type RelayAction = {
  ActionFailurePolicy?: ActionFailurePolicy;
  MailFrom?: MailFrom;
  /**
   * @minLength `1`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9:_/+=,@.#-]+$`
   */
  Relay: string;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.ReplaceRecipientAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-replacerecipientaction.html}
 */
export type ReplaceRecipientAction = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  ReplaceWith?: string[];
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.Rule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rule.html}
 */
export type Rule = {
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Actions: RuleAction[];
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Conditions?: RuleCondition[];
  /**
   * @minLength `1`
   * @maxLength `32`
   * @pattern `^[a-zA-Z0-9_.-]+$`
   */
  Name?: string;
  /**
   * @minLength `0`
   * @maxLength `10`
   */
  Unless?: RuleCondition[];
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html}
 */
export type RuleAction =
  | {
      Drop: DropAction;
    }
  | {
      Relay: RelayAction;
    }
  | {
      Archive: ArchiveAction;
    }
  | {
      WriteToS3: S3Action;
    }
  | {
      Send: SendAction;
    }
  | {
      AddHeader: AddHeaderAction;
    }
  | {
      ReplaceRecipient: ReplaceRecipientAction;
    }
  | {
      DeliverToMailbox: DeliverToMailboxAction;
    }
  | {
      DeliverToQBusiness: DeliverToQBusinessAction;
    };
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleBooleanEmailAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulebooleanemailattribute.html}
 */
export type RuleBooleanEmailAttribute =
  | "READ_RECEIPT_REQUESTED"
  | "TLS"
  | "TLS_WRAPPED";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleBooleanExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulebooleanexpression.html}
 */
export type RuleBooleanExpression = {
  Evaluate: RuleBooleanToEvaluate;
  Operator: RuleBooleanOperator;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleBooleanOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulebooleanoperator.html}
 */
export type RuleBooleanOperator = "IS_TRUE" | "IS_FALSE";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleBooleanToEvaluate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulebooleantoevaluate.html}
 */
export type RuleBooleanToEvaluate =
  | {
      Attribute: RuleBooleanEmailAttribute;
    }
  | {
      Analysis: Analysis;
    };
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleCondition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulecondition.html}
 */
export type RuleCondition =
  | {
      BooleanExpression: RuleBooleanExpression;
    }
  | {
      StringExpression: RuleStringExpression;
    }
  | {
      NumberExpression: RuleNumberExpression;
    }
  | {
      IpExpression: RuleIpExpression;
    }
  | {
      VerdictExpression: RuleVerdictExpression;
    }
  | {
      DmarcExpression: RuleDmarcExpression;
    };
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleDmarcExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruledmarcexpression.html}
 */
export type RuleDmarcExpression = {
  Operator: RuleDmarcOperator;
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Values: RuleDmarcPolicy[];
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleDmarcOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruledmarcoperator.html}
 */
export type RuleDmarcOperator = "EQUALS" | "NOT_EQUALS";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleDmarcPolicy`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruledmarcpolicy.html}
 */
export type RuleDmarcPolicy = "NONE" | "QUARANTINE" | "REJECT";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleIpEmailAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleipemailattribute.html}
 */
export type RuleIpEmailAttribute = "SOURCE_IP";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleIpExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleipexpression.html}
 */
export type RuleIpExpression = {
  Evaluate: RuleIpToEvaluate;
  Operator: RuleIpOperator;
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleIpOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleipoperator.html}
 */
export type RuleIpOperator = "CIDR_MATCHES" | "NOT_CIDR_MATCHES";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleIpToEvaluate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleiptoevaluate.html}
 */
export type RuleIpToEvaluate = {
  Attribute: RuleIpEmailAttribute;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleNumberEmailAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulenumberemailattribute.html}
 */
export type RuleNumberEmailAttribute = "MESSAGE_SIZE";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleNumberExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulenumberexpression.html}
 */
export type RuleNumberExpression = {
  Evaluate: RuleNumberToEvaluate;
  Operator: RuleNumberOperator;
  Value: number;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleNumberOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulenumberoperator.html}
 */
export type RuleNumberOperator =
  | "EQUALS"
  | "NOT_EQUALS"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "LESS_THAN_OR_EQUAL"
  | "GREATER_THAN_OR_EQUAL";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleNumberToEvaluate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulenumbertoevaluate.html}
 */
export type RuleNumberToEvaluate = {
  Attribute: RuleNumberEmailAttribute;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleStringEmailAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringemailattribute.html}
 */
export type RuleStringEmailAttribute =
  | "MAIL_FROM"
  | "HELO"
  | "RECIPIENT"
  | "SENDER"
  | "FROM"
  | "SUBJECT"
  | "TO"
  | "CC";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleStringExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringexpression.html}
 */
export type RuleStringExpression = {
  Evaluate: RuleStringToEvaluate;
  Operator: RuleStringOperator;
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleStringOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringoperator.html}
 */
export type RuleStringOperator =
  | "EQUALS"
  | "NOT_EQUALS"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleStringToEvaluate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringtoevaluate.html}
 */
export type RuleStringToEvaluate =
  | {
      Attribute: RuleStringEmailAttribute;
    }
  | {
      /**
       * @pattern `^X-[a-zA-Z0-9-]{1,256}$`
       */
      MimeHeaderAttribute: string;
    }
  | {
      Analysis: Analysis;
    };
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleVerdict`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdict.html}
 */
export type RuleVerdict = "PASS" | "FAIL" | "GRAY" | "PROCESSING_FAILED";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleVerdictAttribute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdictattribute.html}
 */
export type RuleVerdictAttribute = "SPF" | "DKIM";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleVerdictExpression`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdictexpression.html}
 */
export type RuleVerdictExpression = {
  Evaluate: RuleVerdictToEvaluate;
  Operator: RuleVerdictOperator;
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Values: RuleVerdict[];
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleVerdictOperator`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdictoperator.html}
 */
export type RuleVerdictOperator = "EQUALS" | "NOT_EQUALS";
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.RuleVerdictToEvaluate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdicttoevaluate.html}
 */
export type RuleVerdictToEvaluate =
  | {
      Attribute: RuleVerdictAttribute;
    }
  | {
      Analysis: Analysis;
    };
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.S3Action`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-s3action.html}
 */
export type S3Action = {
  ActionFailurePolicy?: ActionFailurePolicy;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9:_/+=,@.#-]+$`
   */
  RoleArn: string;
  /**
   * @minLength `1`
   * @maxLength `62`
   * @pattern `^[a-zA-Z0-9.-]+$`
   */
  S3Bucket: string;
  /**
   * @minLength `1`
   * @maxLength `62`
   * @pattern `^[a-zA-Z0-9!_.*'()/-]+$`
   */
  S3Prefix?: string;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9-:/]+$`
   */
  S3SseKmsKeyId?: string;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.SendAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-sendaction.html}
 */
export type SendAction = {
  ActionFailurePolicy?: ActionFailurePolicy;
  /**
   * @minLength `20`
   * @maxLength `2048`
   * @pattern `^[a-zA-Z0-9:_/+=,@.#-]+$`
   */
  RoleArn: string;
};
/**
 * Type definition for `AWS::SES::MailManagerRuleSet.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-tag.html}
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
 * Definition of AWS::SES::MailManagerRuleSet Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html}
 */
export class SESMailManagerRuleSet extends $Resource<
  "AWS::SES::MailManagerRuleSet",
  SESMailManagerRuleSetProperties,
  SESMailManagerRuleSetAttributes
> {
  public static readonly Type = "AWS::SES::MailManagerRuleSet";
  constructor(
    logicalId: string,
    properties: SESMailManagerRuleSetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, SESMailManagerRuleSet.Type, properties, options);
  }
}
