import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource type definition for AWS::NetworkFirewall::RuleGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html}
 */
export type NetworkFirewallRuleGroupProperties = {
  Capacity: number;
  /**
   * @minLength `1`
   * @maxLength `512`
   * @pattern `^.*$`
   */
  Description?: string;
  RuleGroup?: RuleGroup;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-]+$`
   */
  RuleGroupName: string;
  Tags?: Tag[];
  Type: "STATELESS" | "STATEFUL";
};
/**
 * Attribute type definition for `AWS::NetworkFirewall::RuleGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#aws-resource-networkfirewall-rulegroup-return-values}
 */
export type NetworkFirewallRuleGroupAttributes = {
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws.*)$`
   */
  RuleGroupArn: string;
  /**
   * @minLength `36`
   * @maxLength `36`
   * @pattern `^([0-9a-f]{8})-([0-9a-f]{4}-){3}([0-9a-f]{12})$`
   */
  RuleGroupId: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.ActionDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-actiondefinition.html}
 */
export type ActionDefinition = {
  PublishMetricAction?: PublishMetricAction;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.Address`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-address.html}
 */
export type Address = {
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^([a-fA-F\d:\.]+/\d{1,3})$`
   */
  AddressDefinition: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.CustomAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-customaction.html}
 */
export type CustomAction = {
  ActionDefinition: ActionDefinition;
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9]+$`
   */
  ActionName: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.Dimension`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-dimension.html}
 */
export type Dimension = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^[a-zA-Z0-9-_ ]+$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.GeneratedRulesType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-generatedrulestype.html}
 */
export type GeneratedRulesType = "ALLOWLIST" | "DENYLIST";
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.Header`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-header.html}
 */
export type Header = {
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^.*$`
   */
  Destination: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^.*$`
   */
  DestinationPort: string;
  Direction: "FORWARD" | "ANY";
  Protocol:
    | "IP"
    | "TCP"
    | "UDP"
    | "ICMP"
    | "HTTP"
    | "FTP"
    | "TLS"
    | "SMB"
    | "DNS"
    | "DCERPC"
    | "SSH"
    | "SMTP"
    | "IMAP"
    | "MSN"
    | "KRB5"
    | "IKEV2"
    | "TFTP"
    | "NTP"
    | "DHCP";
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^.*$`
   */
  Source: string;
  /**
   * @minLength `1`
   * @maxLength `1024`
   * @pattern `^.*$`
   */
  SourcePort: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.IPSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ipset.html}
 */
export type IPSet = {
  Definition?: string[];
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.IPSetReference`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ipsetreference.html}
 */
export type IPSetReference = {
  /**
   * A resource ARN.
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^(arn:aws.*)$`
   */
  ReferenceArn?: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.MatchAttributes`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html}
 */
export type MatchAttributes = {
  DestinationPorts?: PortRange[];
  Destinations?: Address[];
  Protocols?: number[];
  SourcePorts?: PortRange[];
  Sources?: Address[];
  TCPFlags?: TCPFlagField[];
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.PortRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portrange.html}
 */
export type PortRange = {
  /**
   * @max `65535`
   */
  FromPort: number;
  /**
   * @max `65535`
   */
  ToPort: number;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.PortSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portset.html}
 */
export type PortSet = {
  Definition?: string[];
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.PublishMetricAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-publishmetricaction.html}
 */
export type PublishMetricAction = {
  Dimensions: Dimension[];
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.ReferenceSets`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-referencesets.html}
 */
export type ReferenceSets = {
  IPSetReferences?: Record<string, IPSetReference>;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.RuleDefinition`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruledefinition.html}
 */
export type RuleDefinition = {
  Actions: string[];
  MatchAttributes: MatchAttributes;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.RuleGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulegroup.html}
 */
export type RuleGroup = {
  ReferenceSets?: ReferenceSets;
  RuleVariables?: RuleVariables;
  RulesSource: RulesSource;
  StatefulRuleOptions?: StatefulRuleOptions;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.RuleOption`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruleoption.html}
 */
export type RuleOption = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^.*$`
   */
  Keyword: string;
  Settings?: string[];
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.RuleOrder`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruleorder.html}
 */
export type RuleOrder = "DEFAULT_ACTION_ORDER" | "STRICT_ORDER";
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.RuleVariables`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulevariables.html}
 */
export type RuleVariables = {
  IPSets?: Record<string, IPSet>;
  PortSets?: Record<string, PortSet>;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.RulesSource`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessource.html}
 */
export type RulesSource = {
  RulesSourceList?: RulesSourceList;
  /**
   * @maxLength `1000000`
   */
  RulesString?: string;
  StatefulRules?: StatefulRule[];
  StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.RulesSourceList`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessourcelist.html}
 */
export type RulesSourceList = {
  GeneratedRulesType: GeneratedRulesType;
  TargetTypes: TargetType[];
  Targets: string[];
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.StatefulRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulrule.html}
 */
export type StatefulRule = {
  Action: "PASS" | "DROP" | "ALERT" | "REJECT";
  Header: Header;
  RuleOptions: RuleOption[];
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.StatefulRuleOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulruleoptions.html}
 */
export type StatefulRuleOptions = {
  RuleOrder?: RuleOrder;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.StatelessRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrule.html}
 */
export type StatelessRule = {
  /**
   * @min `1`
   * @max `65535`
   */
  Priority: number;
  RuleDefinition: RuleDefinition;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.StatelessRulesAndCustomActions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions.html}
 */
export type StatelessRulesAndCustomActions = {
  CustomActions?: CustomAction[];
  StatelessRules: StatelessRule[];
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.TCPFlag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-tcpflag.html}
 */
export type TCPFlag =
  | "FIN"
  | "SYN"
  | "RST"
  | "PSH"
  | "ACK"
  | "URG"
  | "ECE"
  | "CWR";
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.TCPFlagField`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-tcpflagfield.html}
 */
export type TCPFlagField = {
  Flags: TCPFlag[];
  Masks?: TCPFlag[];
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-tag.html}
 */
export type Tag = {
  /**
   * @minLength `1`
   * @maxLength `128`
   * @pattern `^.*$`
   */
  Key: string;
  /**
   * @maxLength `255`
   * @pattern `^.*$`
   */
  Value: string;
};
/**
 * Type definition for `AWS::NetworkFirewall::RuleGroup.TargetType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-targettype.html}
 */
export type TargetType = "TLS_SNI" | "HTTP_HOST";
/**
 * Resource type definition for AWS::NetworkFirewall::RuleGroup
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html}
 */
export class NetworkFirewallRuleGroup extends $Resource<
  "AWS::NetworkFirewall::RuleGroup",
  NetworkFirewallRuleGroupProperties,
  NetworkFirewallRuleGroupAttributes
> {
  public static readonly Type = "AWS::NetworkFirewall::RuleGroup";
  public static readonly AttributeNames = [
    "RuleGroupArn" as const,
    "RuleGroupId" as const,
  ];
  constructor(
    logicalId: string,
    properties: NetworkFirewallRuleGroupProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      NetworkFirewallRuleGroup.Type,
      properties,
      NetworkFirewallRuleGroup.AttributeNames,
      options,
    );
  }
}
