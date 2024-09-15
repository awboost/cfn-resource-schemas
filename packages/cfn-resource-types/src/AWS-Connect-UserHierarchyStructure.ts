import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::Connect::UserHierarchyStructure
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html}
 */
export type ConnectUserHierarchyStructureProperties = {
  /**
   * The identifier of the Amazon Connect instance.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
   */
  InstanceArn: string;
  /**
   * Information about the hierarchy structure.
   */
  UserHierarchyStructure?: {
    /**
     * Information about level five.
     */
    LevelFive?: LevelFive;
    /**
     * Information about level four.
     */
    LevelFour?: LevelFour;
    /**
     * Information about level one.
     */
    LevelOne?: LevelOne;
    /**
     * Information about level three.
     */
    LevelThree?: LevelThree;
    /**
     * Information about level two.
     */
    LevelTwo?: LevelTwo;
  };
};
/**
 * Attribute type definition for `AWS::Connect::UserHierarchyStructure`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#aws-resource-connect-userhierarchystructure-return-values}
 */
export type ConnectUserHierarchyStructureAttributes = {
  /**
   * The identifier of the User Hierarchy Structure.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*user-hierarchy-structure`
   */
  UserHierarchyStructureArn: string;
};
/**
 * Type definition for `AWS::Connect::UserHierarchyStructure.LevelFive`.
 * Information about level five.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelfive.html}
 */
export type LevelFive = {
  /**
   * The Amazon Resource Name (ARN) of the hierarchy level.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent-group-level/[-0-9]*$`
   */
  HierarchyLevelArn?: string;
  /**
   * The identifier of the hierarchy level.
   */
  HierarchyLevelId?: string;
  /**
   * The name of the hierarchy level.
   */
  Name: string;
};
/**
 * Type definition for `AWS::Connect::UserHierarchyStructure.LevelFour`.
 * Information about level four.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelfour.html}
 */
export type LevelFour = {
  /**
   * The Amazon Resource Name (ARN) of the hierarchy level.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent-group-level/[-0-9]*$`
   */
  HierarchyLevelArn?: string;
  /**
   * The identifier of the hierarchy level.
   */
  HierarchyLevelId?: string;
  /**
   * The name of the hierarchy level.
   */
  Name: string;
};
/**
 * Type definition for `AWS::Connect::UserHierarchyStructure.LevelOne`.
 * Information about level one.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelone.html}
 */
export type LevelOne = {
  /**
   * The Amazon Resource Name (ARN) of the hierarchy level.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent-group-level/[-0-9]*$`
   */
  HierarchyLevelArn?: string;
  /**
   * The identifier of the hierarchy level.
   */
  HierarchyLevelId?: string;
  /**
   * The name of the hierarchy level.
   */
  Name: string;
};
/**
 * Type definition for `AWS::Connect::UserHierarchyStructure.LevelThree`.
 * Information about level three.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-levelthree.html}
 */
export type LevelThree = {
  /**
   * The Amazon Resource Name (ARN) of the hierarchy level.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent-group-level/[-0-9]*$`
   */
  HierarchyLevelArn?: string;
  /**
   * The identifier of the hierarchy level.
   */
  HierarchyLevelId?: string;
  /**
   * The name of the hierarchy level.
   */
  Name: string;
};
/**
 * Type definition for `AWS::Connect::UserHierarchyStructure.LevelTwo`.
 * Information about level two.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-userhierarchystructure-leveltwo.html}
 */
export type LevelTwo = {
  /**
   * The Amazon Resource Name (ARN) of the hierarchy level.
   * @pattern `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]/‍*agent-group-level/[-0-9]*$`
   */
  HierarchyLevelArn?: string;
  /**
   * The identifier of the hierarchy level.
   */
  HierarchyLevelId?: string;
  /**
   * The name of the hierarchy level.
   */
  Name: string;
};
/**
 * Resource Type definition for AWS::Connect::UserHierarchyStructure
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html}
 */
export class ConnectUserHierarchyStructure extends $Resource<
  "AWS::Connect::UserHierarchyStructure",
  ConnectUserHierarchyStructureProperties,
  ConnectUserHierarchyStructureAttributes
> {
  public static readonly Type = "AWS::Connect::UserHierarchyStructure";
  constructor(
    logicalId: string,
    properties: ConnectUserHierarchyStructureProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, ConnectUserHierarchyStructure.Type, properties, options);
  }
}
