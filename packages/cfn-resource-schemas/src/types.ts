import type { JSONSchema7 } from "json-schema";

/**
 * Description of a CloudFormation resource.
 * @see {@link https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html}
 */
export type ResourceTypeSchema = {
  /**
   * The unique name for your resource. Specifies a three-part namespace for
   * your resource, with a recommended pattern of
   * `Organization::Service::Resource`.
   *
   * Pattern: `^[a-zA-Z0-9]{2,64}::[a-zA-Z0-9]{2,64}::[a-zA-Z0-9]{2,64}$`
   */
  typeName: string;
  /**
   * A short description of the resource. This will be displayed in the AWS CloudFormation console.
   */
  description: string;
  /**
   * The URL of the source code for this resource, if public.
   */
  sourceUrl?: string;
  /**
   * The URL of a page providing detailed documentation for this resource.
   */
  documentationUrl?: string;
  /**
   * The order of replacement when a resource update necessitates replacing the
   * existing resource with a new resource. For example, updating a resource
   * property that is listed in createonlyProperties results in a new resource
   * being created to replace the existing resource.
   *
   * By default, when updating a resource that requires replacement, AWS
   * CloudFormation first creates the new resource, and then delete the old
   * resource. However, some resources can only exist one at a time in a given
   * account/region. For these resources, this attribute can be used to instruct
   * AWS CloudFormation to delete the existing resource before creating its
   * replacement.
   *
   * For more information on how resources are updated, see
   * {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html |Update behaviors of stack resources}
   * in the AWS CloudFormation User Guide.
   */
  replacementStrategy?: "create_then_delete" | "delete_then_create";
  /**
   * Deprecated. Use the tagging element instead.
   * @deprecated
   */
  tagable?: boolean;
  /**
   * Contains properties that specify the resource type's support for tags.
   *
   * If your resource type does not support tagging, you must set taggable to
   * false or your resource type will fail contract testing.
   */
  tagging?: ResourceTagging;
  /**
   * Use the definitions block to provide shared resource property schemas.
   *
   * It's considered a best practice is to use the definitions section to define
   * schema elements that may be used at multiple points in your resource type
   * schema. You can then use a JSON pointer to reference that element at the
   * appropriate places in your resource type schema.
   */
  definitions?: Record<string, JSONSchema7>;
  /**
   * The properties of the resource.
   *
   * All properties of a resource must be expressed in the schema. Arbitrary
   * inputs aren't allowed. A resource must contain at least one property.
   *
   * Nested properties are not allowed. Instead, define any nested properties in
   * the definitions element, and use a $ref pointer to reference them in the
   * desired property.
   */
  properties: Record<string, JSONSchema7>;
  required?: string[];
  /**
   * One or more transforms to apply to the property value when comparing for
   * drift. For more information, see
   * {@link https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-model-false-drift.html |Preventing false drift detection results for resource types}.
   */
  propertyTransform?: Record<string, string>;
  /**
   * Specifies the provisioning operations which can be performed on this
   * resource type. The handlers specified determine what provisioning actions
   * CloudFormation takes with respect to the resource during various stack
   * operations.
   */
  handlers?: Record<CrudHandlerName, ResourceHandler>;
  /**
   * Resource properties that can be returned by a read or list request, but
   * can't be set by the user.
   */
  readOnlyProperties?: string[];
  /**
   * Resource properties that can be specified by the user, but can't be
   * returned by a read or list request. Write-only properties are often used to
   * contain passwords, secrets, or other sensitive data.
   */
  writeOnlyProperties?: string[];
  /**
   * A list of JSON pointers for properties that can only be updated under
   * certain conditions. For example, you can upgrade the engine version of an
   * RDS DBInstance but you cannot downgrade it. When updating this property for
   * a resource in a CloudFormation stack, the resource will be replaced if it
   * cannot be updated.
   */
  conditionalCreateOnlyProperties?: string[];
  /**
   * A list of JSON pointers for properties that are hidden. These properties
   * will still be used but will not be visible.
   */
  nonPublicProperties?: string[];
  /**
   * A list of JSON pointers for definitions that are hidden. These definitions
   * will still be used but will not be visible.
   */
  nonPublicDefinitions?: string[];
  /**
   * Resource properties that can be specified by the user only during resource
   * creation.
   */
  createOnlyProperties?: string[];
  /**
   * Resource properties that have been deprecated by the underlying service
   * provider. These properties are still accepted in create and update
   * operations. However they may be ignored, or converted to a consistent model
   * on application. Deprecated properties are not guaranteed to be returned by
   * read operations.
   */
  deprecatedProperties?: string[];
  /**
   * The uniquely identifier for an instance of this resource type. An
   * identifier is a non-zero-length list of JSON pointers to properties that
   * form a single key. An identifier can be a single or multiple properties to
   * support composite-key identifiers.
   */
  primaryIdentifier: string[];
  /**
   * An optional list of supplementary identifiers, each of which uniquely
   * identifies an instance of this resource type. An identifier is a
   * non-zero-length list of JSON pointers to properties that form a single key.
   * An identifier can be a single property, or multiple properties to construct
   * composite-key identifiers.
   */
  additionalIdentifiers?: string[];
  resourceLink?: ResourceLink;
};

/**
 * Contains properties that specify the resource type's support for tags.
 */
export type ResourceTagging = {
  /**
   * Whether this resource type supports tagging.
   * @default true
   */
  taggable?: boolean;
  /**
   * Whether this resource type supports tagging resources upon creation.
   * @default true
   */
  tagOnCreate?: boolean;
  /**
   * Whether this resource type supports updating tags during resource update
   * operations.
   * @default true
   */
  tagUpdatable?: boolean;
  /**
   * Whether this resource type supports CloudFormation system tags.
   * @default true
   */
  cloudFormationSystemTags?: boolean;
  /**
   * A reference to where you have defined the Tags property in this resource
   * type schema.
   * @default "/properties/Tags"
   */
  tagProperty?: string;
};

export type CrudHandlerName = "create" | "read" | "update" | "delete" | "list";

export type ResourceHandler = {
  /**
   * A string array that specifies the AWS permissions needed to invoke the
   * create handler.
   *
   * You must specify at least one permission for each handler.
   */
  permissions: string[];
  /**
   * An integer specifying the timeout for the entire operation to be
   * interpreted by the invoker of the handler, in minutes.
   *
   * Valid value 2 - 2160.
   *
   * @default 120
   */
  timeoutInMinutes?: number;
  /**
   * A template-able link to a resource instance. External service links must be
   * absolute, HTTPS URIs.
   */
  resourceLink?: ResourceLink;
};

/**
 * A template-able link to a resource instance. External service links must be
 * absolute, HTTPS URIs.
 */
export type ResourceLink = {
  templateUri: string;
  mappings: string[];
};
