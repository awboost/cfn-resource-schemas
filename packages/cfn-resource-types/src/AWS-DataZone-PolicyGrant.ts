import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::DataZone::PolicyGrant`.
 * Policy Grant in AWS DataZone is an explicit authorization assignment that allows a specific principal (user, group, or project) to perform particular actions (such as creating glossary terms, managing projects, or accessing resources) on governed resources within a certain scope (like a Domain Unit or Project). Policy Grants are essentially the mechanism by which DataZone enforces fine-grained, role-based access control beyond what is possible through AWS IAM alone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-policygrant.html}
 */
export type DataZonePolicyGrantProperties = {
  Detail?: PolicyGrantDetail;
  /**
   * @pattern `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
   */
  DomainIdentifier: string;
  EntityIdentifier: string;
  EntityType: TargetEntityType;
  PolicyType: ManagedPolicyType;
  Principal?: PolicyGrantPrincipal;
};
/**
 * Attribute type definition for `AWS::DataZone::PolicyGrant`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-policygrant.html#aws-resource-datazone-policygrant-return-values}
 */
export type DataZonePolicyGrantAttributes = {
  /**
   * Specifies the timestamp at which policy grant member was created.
   */
  CreatedAt: string;
  /**
   * Specifies the user who created the policy grant member.
   */
  CreatedBy: string;
  /**
   * The unique identifier of the policy grant returned by the AddPolicyGrant API
   * @pattern `^[A-Za-z0-9+/]{10}$`
   */
  GrantId: string;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.AddToProjectMemberPoolPolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-addtoprojectmemberpoolpolicygrantdetail.html}
 */
export type AddToProjectMemberPoolPolicyGrantDetail = {
  IncludeChildDomainUnits?: boolean;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.AllDomainUnitsGrantFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-alldomainunitsgrantfilter.html}
 */
export type AllDomainUnitsGrantFilter = Record<string, any>;
/**
 * Type definition for `AWS::DataZone::PolicyGrant.AllUsersGrantFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-allusersgrantfilter.html}
 */
export type AllUsersGrantFilter = Record<string, any>;
/**
 * Type definition for `AWS::DataZone::PolicyGrant.CreateAssetTypePolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-createassettypepolicygrantdetail.html}
 */
export type CreateAssetTypePolicyGrantDetail = {
  IncludeChildDomainUnits?: boolean;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.CreateDomainUnitPolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-createdomainunitpolicygrantdetail.html}
 */
export type CreateDomainUnitPolicyGrantDetail = {
  IncludeChildDomainUnits?: boolean;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.CreateEnvironmentProfilePolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-createenvironmentprofilepolicygrantdetail.html}
 */
export type CreateEnvironmentProfilePolicyGrantDetail = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_\-]+$`
   */
  DomainUnitId?: string;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.CreateFormTypePolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-createformtypepolicygrantdetail.html}
 */
export type CreateFormTypePolicyGrantDetail = {
  IncludeChildDomainUnits?: boolean;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.CreateGlossaryPolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-createglossarypolicygrantdetail.html}
 */
export type CreateGlossaryPolicyGrantDetail = {
  IncludeChildDomainUnits?: boolean;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.CreateProjectFromProjectProfilePolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-createprojectfromprojectprofilepolicygrantdetail.html}
 */
export type CreateProjectFromProjectProfilePolicyGrantDetail = {
  IncludeChildDomainUnits?: boolean;
  ProjectProfiles?: string[];
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.CreateProjectPolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-createprojectpolicygrantdetail.html}
 */
export type CreateProjectPolicyGrantDetail = {
  IncludeChildDomainUnits?: boolean;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.DomainUnitDesignation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-domainunitdesignation.html}
 */
export type DomainUnitDesignation = "OWNER";
/**
 * Type definition for `AWS::DataZone::PolicyGrant.DomainUnitFilterForProject`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-domainunitfilterforproject.html}
 */
export type DomainUnitFilterForProject = {
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_\-]+$`
   */
  DomainUnit: string;
  IncludeChildDomainUnits?: boolean;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.DomainUnitGrantFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-domainunitgrantfilter.html}
 */
export type DomainUnitGrantFilter = {
  AllDomainUnitsGrantFilter: AllDomainUnitsGrantFilter;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.DomainUnitPolicyGrantPrincipal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-domainunitpolicygrantprincipal.html}
 */
export type DomainUnitPolicyGrantPrincipal = {
  DomainUnitDesignation?: DomainUnitDesignation;
  DomainUnitGrantFilter?: DomainUnitGrantFilter;
  /**
   * @minLength `1`
   * @maxLength `256`
   * @pattern `^[a-z0-9_\-]+$`
   */
  DomainUnitIdentifier?: string;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.GroupPolicyGrantPrincipal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-grouppolicygrantprincipal.html}
 */
export type GroupPolicyGrantPrincipal = {
  /**
   * @pattern `(^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$|[\p{L}\p{M}\p{S}\p{N}\p{P}\t\n\r  ]+)`
   */
  GroupIdentifier: string;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.ManagedPolicyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-managedpolicytype.html}
 */
export type ManagedPolicyType =
  | "CREATE_DOMAIN_UNIT"
  | "OVERRIDE_DOMAIN_UNIT_OWNERS"
  | "ADD_TO_PROJECT_MEMBER_POOL"
  | "OVERRIDE_PROJECT_OWNERS"
  | "CREATE_GLOSSARY"
  | "CREATE_FORM_TYPE"
  | "CREATE_ASSET_TYPE"
  | "CREATE_PROJECT"
  | "CREATE_ENVIRONMENT_PROFILE"
  | "DELEGATE_CREATE_ENVIRONMENT_PROFILE"
  | "CREATE_ENVIRONMENT"
  | "CREATE_ENVIRONMENT_FROM_BLUEPRINT"
  | "CREATE_PROJECT_FROM_PROJECT_PROFILE";
/**
 * Type definition for `AWS::DataZone::PolicyGrant.OverrideDomainUnitOwnersPolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-overridedomainunitownerspolicygrantdetail.html}
 */
export type OverrideDomainUnitOwnersPolicyGrantDetail = {
  IncludeChildDomainUnits?: boolean;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.OverrideProjectOwnersPolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-overrideprojectownerspolicygrantdetail.html}
 */
export type OverrideProjectOwnersPolicyGrantDetail = {
  IncludeChildDomainUnits?: boolean;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.PolicyGrantDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-policygrantdetail.html}
 */
export type PolicyGrantDetail =
  | {
      CreateDomainUnit: CreateDomainUnitPolicyGrantDetail;
    }
  | {
      OverrideDomainUnitOwners: OverrideDomainUnitOwnersPolicyGrantDetail;
    }
  | {
      AddToProjectMemberPool: AddToProjectMemberPoolPolicyGrantDetail;
    }
  | {
      OverrideProjectOwners: OverrideProjectOwnersPolicyGrantDetail;
    }
  | {
      CreateGlossary: CreateGlossaryPolicyGrantDetail;
    }
  | {
      CreateFormType: CreateFormTypePolicyGrantDetail;
    }
  | {
      CreateAssetType: CreateAssetTypePolicyGrantDetail;
    }
  | {
      CreateProject: CreateProjectPolicyGrantDetail;
    }
  | {
      CreateEnvironmentProfile: CreateEnvironmentProfilePolicyGrantDetail;
    }
  | {
      DelegateCreateEnvironmentProfile: Unit;
    }
  | {
      CreateEnvironment: Unit;
    }
  | {
      CreateEnvironmentFromBlueprint: Unit;
    }
  | {
      CreateProjectFromProjectProfile: CreateProjectFromProjectProfilePolicyGrantDetail;
    };
/**
 * Type definition for `AWS::DataZone::PolicyGrant.PolicyGrantPrincipal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-policygrantprincipal.html}
 */
export type PolicyGrantPrincipal =
  | {
      User: UserPolicyGrantPrincipal;
    }
  | {
      Group: GroupPolicyGrantPrincipal;
    }
  | {
      Project: ProjectPolicyGrantPrincipal;
    }
  | {
      DomainUnit: DomainUnitPolicyGrantPrincipal;
    };
/**
 * Type definition for `AWS::DataZone::PolicyGrant.ProjectDesignation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-projectdesignation.html}
 */
export type ProjectDesignation =
  | "OWNER"
  | "CONTRIBUTOR"
  | "PROJECT_CATALOG_STEWARD";
/**
 * Type definition for `AWS::DataZone::PolicyGrant.ProjectGrantFilter`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-projectgrantfilter.html}
 */
export type ProjectGrantFilter = {
  DomainUnitFilter: DomainUnitFilterForProject;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.ProjectPolicyGrantPrincipal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-projectpolicygrantprincipal.html}
 */
export type ProjectPolicyGrantPrincipal = {
  ProjectDesignation?: ProjectDesignation;
  ProjectGrantFilter?: ProjectGrantFilter;
  /**
   * @pattern `^[a-zA-Z0-9_-]{1,36}$`
   */
  ProjectIdentifier?: string;
};
/**
 * Type definition for `AWS::DataZone::PolicyGrant.TargetEntityType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-targetentitytype.html}
 */
export type TargetEntityType =
  | "DOMAIN_UNIT"
  | "ENVIRONMENT_BLUEPRINT_CONFIGURATION"
  | "ENVIRONMENT_PROFILE"
  | "ASSET_TYPE";
/**
 * Type definition for `AWS::DataZone::PolicyGrant.Unit`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-unit.html}
 */
export type Unit = Record<string, any>;
/**
 * Type definition for `AWS::DataZone::PolicyGrant.UserPolicyGrantPrincipal`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datazone-policygrant-userpolicygrantprincipal.html}
 */
export type UserPolicyGrantPrincipal =
  | {
      /**
       * @pattern `(^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$|^[a-zA-Z_0-9+=,.@-]+$|^arn:aws[^:]*:iam::\d{12}:.+$)`
       */
      UserIdentifier: string;
    }
  | {
      AllUsersGrantFilter: AllUsersGrantFilter;
    };
/**
 * Resource type definition for `AWS::DataZone::PolicyGrant`.
 * Policy Grant in AWS DataZone is an explicit authorization assignment that allows a specific principal (user, group, or project) to perform particular actions (such as creating glossary terms, managing projects, or accessing resources) on governed resources within a certain scope (like a Domain Unit or Project). Policy Grants are essentially the mechanism by which DataZone enforces fine-grained, role-based access control beyond what is possible through AWS IAM alone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-policygrant.html}
 */
export class DataZonePolicyGrant extends $Resource<
  "AWS::DataZone::PolicyGrant",
  DataZonePolicyGrantProperties,
  DataZonePolicyGrantAttributes
> {
  public static readonly Type = "AWS::DataZone::PolicyGrant";
  constructor(
    logicalId: string,
    properties: DataZonePolicyGrantProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DataZonePolicyGrant.Type, properties, options);
  }
}
