import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::EVS::Environment`.
 * An environment created within the EVS service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evs-environment.html}
 */
export type EVSEnvironmentProperties = {
  ConnectivityInfo: {
    /**
     * @minLength `2`
     * @maxLength `2`
     */
    PrivateRouteServerPeerings: string[];
  };
  /**
   * The name of an EVS environment
   * @pattern `^[a-zA-Z0-9_-]{1,100}$`
   */
  EnvironmentName?: string;
  /**
   * The initial hosts for environment only required upon creation. Modification after creation will have no effect
   * @minLength `4`
   * @maxLength `4`
   */
  Hosts?: HostInfoForCreate[];
  /**
   * The initial Vlan configuration only required upon creation. Modification after creation will have no effect
   */
  InitialVlans?: {
    EdgeVTep: InitialVlanInfo;
    ExpansionVlan1: InitialVlanInfo;
    ExpansionVlan2: InitialVlanInfo;
    Hcx: InitialVlanInfo;
    /**
     * @pattern `^acl-[a-zA-Z0-9_-]+$`
     */
    HcxNetworkAclId?: string;
    IsHcxPublic?: boolean;
    NsxUpLink: InitialVlanInfo;
    VMotion: InitialVlanInfo;
    VSan: InitialVlanInfo;
    VTep: InitialVlanInfo;
    VmManagement: InitialVlanInfo;
    VmkManagement: InitialVlanInfo;
  };
  KmsKeyId?: string;
  /**
   * The license information for an EVS environment
   */
  LicenseInfo: {
    /**
     * @pattern `^[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}$`
     */
    SolutionKey: string;
    /**
     * @pattern `^[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}$`
     */
    VsanKey: string;
  };
  ServiceAccessSecurityGroups?: {
    SecurityGroups?: string[];
  };
  /**
   * @minLength `15`
   * @maxLength `24`
   * @pattern `^subnet-[a-f0-9]{8}([a-f0-9]{9})?$`
   */
  ServiceAccessSubnetId: string;
  SiteId: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
  TermsAccepted: boolean;
  VcfHostnames: {
    /**
     * @pattern `^([a-zA-Z0-9\-]*)$`
     */
    CloudBuilder: string;
    /**
     * @pattern `^([a-zA-Z0-9\-]*)$`
     */
    Nsx: string;
    /**
     * @pattern `^([a-zA-Z0-9\-]*)$`
     */
    NsxEdge1: string;
    /**
     * @pattern `^([a-zA-Z0-9\-]*)$`
     */
    NsxEdge2: string;
    /**
     * @pattern `^([a-zA-Z0-9\-]*)$`
     */
    NsxManager1: string;
    /**
     * @pattern `^([a-zA-Z0-9\-]*)$`
     */
    NsxManager2: string;
    /**
     * @pattern `^([a-zA-Z0-9\-]*)$`
     */
    NsxManager3: string;
    /**
     * @pattern `^([a-zA-Z0-9\-]*)$`
     */
    SddcManager: string;
    /**
     * @pattern `^([a-zA-Z0-9\-]*)$`
     */
    VCenter: string;
  };
  VcfVersion: "VCF-5.2.1" | "VCF-5.2.2";
  /**
   * @minLength `12`
   * @maxLength `21`
   * @pattern `^vpc-[a-f0-9]{8}([a-f0-9]{9})?$`
   */
  VpcId: string;
};
/**
 * Attribute type definition for `AWS::EVS::Environment`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evs-environment.html#aws-resource-evs-environment-return-values}
 */
export type EVSEnvironmentAttributes = {
  Checks: {
    ImpairedSince: string;
    Result: CheckResult;
    Type:
      | "KEY_REUSE"
      | "KEY_COVERAGE"
      | "REACHABILITY"
      | "VCF_VERSION"
      | "HOST_COUNT";
  }[];
  CreatedAt: string;
  Credentials: {
    SecretArn: string;
  }[];
  /**
   * @minLength `1`
   * @maxLength `1011`
   * @pattern `^arn:aws:evs:[a-z]{2}-[a-z]+-[0-9]:[0-9]{12}:environment/[a-zA-Z0-9_-]+$`
   */
  EnvironmentArn: string;
  /**
   * @pattern `^(env-[a-zA-Z0-9]{10})$`
   */
  EnvironmentId: string;
  EnvironmentState: EnvironmentState;
  ModifiedAt: string;
  StateDetails: string;
};
/**
 * Type definition for `AWS::EVS::Environment.Check`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evs-environment-check.html}
 */
export type Check = {
  ImpairedSince?: string;
  Result: CheckResult;
  Type:
    | "KEY_REUSE"
    | "KEY_COVERAGE"
    | "REACHABILITY"
    | "VCF_VERSION"
    | "HOST_COUNT";
};
/**
 * Type definition for `AWS::EVS::Environment.CheckResult`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evs-environment-checkresult.html}
 */
export type CheckResult = "PASSED" | "FAILED" | "UNKNOWN";
/**
 * Type definition for `AWS::EVS::Environment.EnvironmentState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evs-environment-environmentstate.html}
 */
export type EnvironmentState =
  | "CREATING"
  | "CREATED"
  | "DELETING"
  | "DELETED"
  | "CREATE_FAILED";
/**
 * Type definition for `AWS::EVS::Environment.HostInfoForCreate`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evs-environment-hostinfoforcreate.html}
 */
export type HostInfoForCreate = {
  /**
   * @minLength `1`
   * @maxLength `25`
   * @pattern `^h-[a-f0-9]{8}([a-f0-9]{9})?$`
   */
  DedicatedHostId?: string;
  /**
   * @pattern `^([a-zA-Z0-9\-]*)$`
   */
  HostName: string;
  InstanceType: "i4i.metal";
  /**
   * @minLength `1`
   * @maxLength `255`
   * @pattern `^[a-zA-Z0-9_-]+$`
   */
  KeyName: string;
  /**
   * @minLength `1`
   * @maxLength `25`
   * @pattern `^pg-[a-f0-9]{8}([a-f0-9]{9})?$`
   */
  PlacementGroupId?: string;
};
/**
 * Type definition for `AWS::EVS::Environment.InitialVlanInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evs-environment-initialvlaninfo.html}
 */
export type InitialVlanInfo = {
  /**
   * @pattern `^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/(3[0-2]|[1-2][0-9]|[0-9])$`
   */
  Cidr: string;
};
/**
 * Type definition for `AWS::EVS::Environment.Secret`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evs-environment-secret.html}
 */
export type Secret = {
  SecretArn?: string;
};
/**
 * Type definition for `AWS::EVS::Environment.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evs-environment-tag.html}
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
 * Resource type definition for `AWS::EVS::Environment`.
 * An environment created within the EVS service
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evs-environment.html}
 */
export class EVSEnvironment extends $Resource<
  "AWS::EVS::Environment",
  EVSEnvironmentProperties,
  EVSEnvironmentAttributes
> {
  public static readonly Type = "AWS::EVS::Environment";
  constructor(
    logicalId: string,
    properties: EVSEnvironmentProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EVSEnvironment.Type, properties, options);
  }
}
