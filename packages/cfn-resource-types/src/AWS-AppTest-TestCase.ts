import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::AppTest::TestCase`.
 * Represents a Test Case that can be captured and executed
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html}
 */
export type AppTestTestCaseProperties = {
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * @pattern `^[A-Za-z][A-Za-z0-9_\-]{1,59}$`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `20`
   */
  Steps: Step[];
  Tags?: TagMap;
};
/**
 * Attribute type definition for `AWS::AppTest::TestCase`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html#aws-resource-apptest-testcase-return-values}
 */
export type AppTestTestCaseAttributes = {
  CreationTime: string;
  LastUpdateTime: string;
  LatestVersion: {
    Status: TestCaseLifecycle;
    Version: number;
  };
  Status: TestCaseLifecycle;
  /**
   * @pattern `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   */
  TestCaseArn: string;
  /**
   * @pattern `^[A-Za-z0-9:/\-]{1,100}$`
   */
  TestCaseId: string;
  TestCaseVersion: number;
};
/**
 * Type definition for `AWS::AppTest::TestCase.Batch`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-batch.html}
 */
export type Batch = {
  /**
   * @pattern `^\S{1,1000}$`
   */
  BatchJobName: string;
  BatchJobParameters?: BatchJobParameters;
  ExportDataSetNames?: string[];
};
/**
 * Type definition for `AWS::AppTest::TestCase.BatchJobParameters`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-batchjobparameters.html}
 */
export type BatchJobParameters = Record<string, string>;
/**
 * Type definition for `AWS::AppTest::TestCase.CaptureTool`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-capturetool.html}
 */
export type CaptureTool = "Precisely" | "AWS DMS";
/**
 * Type definition for `AWS::AppTest::TestCase.CloudFormationAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-cloudformationaction.html}
 */
export type CloudFormationAction = {
  ActionType?: CloudFormationActionType;
  /**
   * @pattern `^\S{1,1000}$`
   */
  Resource: string;
};
/**
 * Type definition for `AWS::AppTest::TestCase.CloudFormationActionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-cloudformationactiontype.html}
 */
export type CloudFormationActionType = "Create" | "Delete";
/**
 * Type definition for `AWS::AppTest::TestCase.CompareAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-compareaction.html}
 */
export type CompareAction = {
  Input: Input;
  Output?: Output;
};
/**
 * Type definition for `AWS::AppTest::TestCase.DatabaseCDC`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-databasecdc.html}
 */
export type DatabaseCDC = {
  SourceMetadata: SourceDatabaseMetadata;
  TargetMetadata: TargetDatabaseMetadata;
};
/**
 * Type definition for `AWS::AppTest::TestCase.DataSet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-dataset.html}
 */
export type DataSet = {
  /**
   * @pattern `^\S{1,50}$`
   */
  Ccsid: string;
  Format: Format;
  Length: number;
  /**
   * @pattern `^\S{1,100}$`
   */
  Name: string;
  Type: DataSetType;
};
/**
 * Type definition for `AWS::AppTest::TestCase.DataSetType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-datasettype.html}
 */
export type DataSetType = "PS";
/**
 * Type definition for `AWS::AppTest::TestCase.FileMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-filemetadata.html}
 */
export type FileMetadata =
  | {
      DataSets: DataSet[];
    }
  | {
      DatabaseCDC: DatabaseCDC;
    };
/**
 * Type definition for `AWS::AppTest::TestCase.Format`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-format.html}
 */
export type Format = "FIXED" | "VARIABLE" | "LINE_SEQUENTIAL";
/**
 * Type definition for `AWS::AppTest::TestCase.Input`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-input.html}
 */
export type Input = {
  File: InputFile;
};
/**
 * Type definition for `AWS::AppTest::TestCase.InputFile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-inputfile.html}
 */
export type InputFile = {
  FileMetadata: FileMetadata;
  /**
   * @pattern `^\S{1,1000}$`
   */
  SourceLocation: string;
  /**
   * @pattern `^\S{1,1000}$`
   */
  TargetLocation: string;
};
/**
 * Type definition for `AWS::AppTest::TestCase.M2ManagedActionProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2managedactionproperties.html}
 */
export type M2ManagedActionProperties = {
  ForceStop?: boolean;
  /**
   * @pattern `^\S{1,1000}$`
   */
  ImportDataSetLocation?: string;
};
/**
 * Type definition for `AWS::AppTest::TestCase.M2ManagedActionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2managedactiontype.html}
 */
export type M2ManagedActionType = "Configure" | "Deconfigure";
/**
 * Type definition for `AWS::AppTest::TestCase.M2ManagedApplicationAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2managedapplicationaction.html}
 */
export type M2ManagedApplicationAction = {
  ActionType: M2ManagedActionType;
  Properties?: M2ManagedActionProperties;
  /**
   * @pattern `^\S{1,1000}$`
   */
  Resource: string;
};
/**
 * Type definition for `AWS::AppTest::TestCase.M2NonManagedActionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2nonmanagedactiontype.html}
 */
export type M2NonManagedActionType = "Configure" | "Deconfigure";
/**
 * Type definition for `AWS::AppTest::TestCase.M2NonManagedApplicationAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-m2nonmanagedapplicationaction.html}
 */
export type M2NonManagedApplicationAction = {
  ActionType: M2NonManagedActionType;
  /**
   * @pattern `^\S{1,1000}$`
   */
  Resource: string;
};
/**
 * Type definition for `AWS::AppTest::TestCase.MainframeAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeaction.html}
 */
export type MainframeAction = {
  ActionType: MainframeActionType;
  Properties?: MainframeActionProperties;
  /**
   * @pattern `^\S{1,1000}$`
   */
  Resource: string;
};
/**
 * Type definition for `AWS::AppTest::TestCase.MainframeActionProperties`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeactionproperties.html}
 */
export type MainframeActionProperties = {
  /**
   * @pattern `^\S{1,1000}$`
   */
  DmsTaskArn?: string;
};
/**
 * Type definition for `AWS::AppTest::TestCase.MainframeActionType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-mainframeactiontype.html}
 */
export type MainframeActionType =
  | {
      Batch: Batch;
    }
  | {
      Tn3270: TN3270;
    };
/**
 * Type definition for `AWS::AppTest::TestCase.Output`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-output.html}
 */
export type Output = {
  File: OutputFile;
};
/**
 * Type definition for `AWS::AppTest::TestCase.OutputFile`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-outputfile.html}
 */
export type OutputFile = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  FileLocation?: string;
};
/**
 * Type definition for `AWS::AppTest::TestCase.ResourceAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-resourceaction.html}
 */
export type ResourceAction =
  | {
      M2ManagedApplicationAction: M2ManagedApplicationAction;
    }
  | {
      M2NonManagedApplicationAction: M2NonManagedApplicationAction;
    }
  | {
      CloudFormationAction: CloudFormationAction;
    };
/**
 * Type definition for `AWS::AppTest::TestCase.Script`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-script.html}
 */
export type Script = {
  /**
   * @minLength `0`
   * @maxLength `1024`
   */
  ScriptLocation: string;
  Type: ScriptType;
};
/**
 * Type definition for `AWS::AppTest::TestCase.ScriptType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-scripttype.html}
 */
export type ScriptType = "Selenium";
/**
 * Type definition for `AWS::AppTest::TestCase.SourceDatabase`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-sourcedatabase.html}
 */
export type SourceDatabase = "z/OS-DB2";
/**
 * Type definition for `AWS::AppTest::TestCase.SourceDatabaseMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-sourcedatabasemetadata.html}
 */
export type SourceDatabaseMetadata = {
  CaptureTool: CaptureTool;
  Type: SourceDatabase;
};
/**
 * Type definition for `AWS::AppTest::TestCase.Step`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-step.html}
 */
export type Step = {
  Action: StepAction;
  /**
   * @minLength `0`
   * @maxLength `1000`
   */
  Description?: string;
  /**
   * @pattern `^[A-Za-z][A-Za-z0-9_\-]{1,59}$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::AppTest::TestCase.StepAction`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-stepaction.html}
 */
export type StepAction =
  | {
      ResourceAction: ResourceAction;
    }
  | {
      MainframeAction: MainframeAction;
    }
  | {
      CompareAction: CompareAction;
    };
/**
 * Type definition for `AWS::AppTest::TestCase.TagMap`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-tagmap.html}
 */
export type TagMap = Record<string, string>;
/**
 * Type definition for `AWS::AppTest::TestCase.TargetDatabase`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-targetdatabase.html}
 */
export type TargetDatabase = "PostgreSQL";
/**
 * Type definition for `AWS::AppTest::TestCase.TargetDatabaseMetadata`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-targetdatabasemetadata.html}
 */
export type TargetDatabaseMetadata = {
  CaptureTool: CaptureTool;
  Type: TargetDatabase;
};
/**
 * Type definition for `AWS::AppTest::TestCase.TestCaseLatestVersion`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-testcaselatestversion.html}
 */
export type TestCaseLatestVersion = {
  Status: TestCaseLifecycle;
  Version: number;
};
/**
 * Type definition for `AWS::AppTest::TestCase.TestCaseLifecycle`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-testcaselifecycle.html}
 */
export type TestCaseLifecycle = "Active" | "Deleting";
/**
 * Type definition for `AWS::AppTest::TestCase.TN3270`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apptest-testcase-tn3270.html}
 */
export type TN3270 = {
  ExportDataSetNames?: string[];
  Script: Script;
};
/**
 * Resource type definition for `AWS::AppTest::TestCase`.
 * Represents a Test Case that can be captured and executed
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apptest-testcase.html}
 */
export class AppTestTestCase extends $Resource<
  "AWS::AppTest::TestCase",
  AppTestTestCaseProperties,
  AppTestTestCaseAttributes
> {
  public static readonly Type = "AWS::AppTest::TestCase";
  constructor(
    logicalId: string,
    properties: AppTestTestCaseProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, AppTestTestCase.Type, properties, options);
  }
}
