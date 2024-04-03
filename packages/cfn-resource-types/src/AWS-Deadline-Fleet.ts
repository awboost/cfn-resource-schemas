import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Definition of AWS::Deadline::Fleet Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html}
 */
export type DeadlineFleetProperties = {
  Configuration: FleetConfiguration;
  /**
   * @minLength `0`
   * @maxLength `100`
   */
  Description?: string;
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  DisplayName: string;
  /**
   * @pattern `^farm-[0-9a-f]{32}$`
   */
  FarmId?: string;
  /**
   * @min `0`
   * @max `2147483647`
   */
  MaxWorkerCount: number;
  /**
   * @min `0`
   * @max `2147483647`
   */
  MinWorkerCount?: number;
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):iam::\d{12}:role(/[!-.0-~]+)/‍*[\w+=,.@-]+$`
   */
  RoleArn: string;
};
/**
 * Attribute type definition for `AWS::Deadline::Fleet`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#aws-resource-deadline-fleet-return-values}
 */
export type DeadlineFleetAttributes = {
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):deadline:[a-z0-9-]+:[0-9]+:farm/farm-[0-9a-z]{32}/fleet/fleet-[0-9a-z]{32}`
   */
  Arn: string;
  Capabilities: {
    /**
     * @minLength `1`
     * @maxLength `15`
     */
    Amounts: {
      Max: number;
      Min: number;
      /**
       * @minLength `1`
       * @maxLength `100`
       * @pattern `^([a-zA-Z][a-zA-Z0-9]{0,63}:)?amount(\.[a-zA-Z][a-zA-Z0-9]{0,63})+$`
       */
      Name: string;
    }[];
    /**
     * @minLength `1`
     * @maxLength `15`
     */
    Attributes: {
      /**
       * @minLength `1`
       * @maxLength `100`
       * @pattern `^([a-zA-Z][a-zA-Z0-9]{0,63}:)?attr(\.[a-zA-Z][a-zA-Z0-9]{0,63})+$`
       */
      Name: string;
      /**
       * @minLength `1`
       * @maxLength `10`
       */
      Values: string[];
    }[];
  };
  /**
   * @pattern `^fleet-[0-9a-f]{32}$`
   */
  FleetId: string;
  Status: FleetStatus;
  WorkerCount: number;
};
/**
 * Type definition for `AWS::Deadline::Fleet.AcceleratorCountRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-acceleratorcountrange.html}
 */
export type AcceleratorCountRange = {
  /**
   * @min `0`
   * @max `2147483647`
   */
  Max?: number;
  /**
   * @min `0`
   * @max `2147483647`
   */
  Min: number;
};
/**
 * Type definition for `AWS::Deadline::Fleet.AcceleratorTotalMemoryMiBRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-acceleratortotalmemorymibrange.html}
 */
export type AcceleratorTotalMemoryMiBRange = {
  /**
   * @min `0`
   * @max `2147483647`
   */
  Max?: number;
  /**
   * @min `0`
   * @max `2147483647`
   */
  Min: number;
};
/**
 * Type definition for `AWS::Deadline::Fleet.AcceleratorType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-acceleratortype.html}
 */
export type AcceleratorType = "gpu";
/**
 * Type definition for `AWS::Deadline::Fleet.AutoScalingMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-autoscalingmode.html}
 */
export type AutoScalingMode = "NO_SCALING" | "EVENT_BASED_AUTO_SCALING";
/**
 * Type definition for `AWS::Deadline::Fleet.CpuArchitectureType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-cpuarchitecturetype.html}
 */
export type CpuArchitectureType = "x86_64" | "arm64";
/**
 * Type definition for `AWS::Deadline::Fleet.CustomerManagedFleetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-customermanagedfleetconfiguration.html}
 */
export type CustomerManagedFleetConfiguration = {
  Mode: AutoScalingMode;
  /**
   * @pattern `^sp-[0-9a-f]{32}$`
   */
  StorageProfileId?: string;
  WorkerCapabilities: CustomerManagedWorkerCapabilities;
};
/**
 * Type definition for `AWS::Deadline::Fleet.CustomerManagedFleetOperatingSystemFamily`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-customermanagedfleetoperatingsystemfamily.html}
 */
export type CustomerManagedFleetOperatingSystemFamily =
  | "WINDOWS"
  | "LINUX"
  | "MACOS";
/**
 * Type definition for `AWS::Deadline::Fleet.CustomerManagedWorkerCapabilities`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-customermanagedworkercapabilities.html}
 */
export type CustomerManagedWorkerCapabilities = {
  AcceleratorCount?: AcceleratorCountRange;
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRange;
  AcceleratorTypes?: AcceleratorType[];
  CpuArchitectureType: CpuArchitectureType;
  /**
   * @minLength `1`
   * @maxLength `15`
   */
  CustomAmounts?: FleetAmountCapability[];
  /**
   * @minLength `1`
   * @maxLength `15`
   */
  CustomAttributes?: FleetAttributeCapability[];
  MemoryMiB: MemoryMiBRange;
  OsFamily: CustomerManagedFleetOperatingSystemFamily;
  VCpuCount: VCpuCountRange;
};
/**
 * Type definition for `AWS::Deadline::Fleet.Ec2EbsVolume`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-ec2ebsvolume.html}
 */
export type Ec2EbsVolume = {
  /**
   * @min `3000`
   * @max `16000`
   */
  Iops?: number;
  SizeGiB?: number;
  /**
   * @min `125`
   * @max `1000`
   */
  ThroughputMiB?: number;
};
/**
 * Type definition for `AWS::Deadline::Fleet.Ec2MarketType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-ec2markettype.html}
 */
export type Ec2MarketType = "on-demand" | "spot";
/**
 * Type definition for `AWS::Deadline::Fleet.FleetAmountCapability`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-fleetamountcapability.html}
 */
export type FleetAmountCapability = {
  Max?: number;
  Min: number;
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([a-zA-Z][a-zA-Z0-9]{0,63}:)?amount(\.[a-zA-Z][a-zA-Z0-9]{0,63})+$`
   */
  Name: string;
};
/**
 * Type definition for `AWS::Deadline::Fleet.FleetAttributeCapability`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-fleetattributecapability.html}
 */
export type FleetAttributeCapability = {
  /**
   * @minLength `1`
   * @maxLength `100`
   * @pattern `^([a-zA-Z][a-zA-Z0-9]{0,63}:)?attr(\.[a-zA-Z][a-zA-Z0-9]{0,63})+$`
   */
  Name: string;
  /**
   * @minLength `1`
   * @maxLength `10`
   */
  Values: string[];
};
/**
 * Type definition for `AWS::Deadline::Fleet.FleetCapabilities`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-fleetcapabilities.html}
 */
export type FleetCapabilities = {
  /**
   * @minLength `1`
   * @maxLength `15`
   */
  Amounts?: FleetAmountCapability[];
  /**
   * @minLength `1`
   * @maxLength `15`
   */
  Attributes?: FleetAttributeCapability[];
};
/**
 * Type definition for `AWS::Deadline::Fleet.FleetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-fleetconfiguration.html}
 */
export type FleetConfiguration =
  | {
      CustomerManaged: CustomerManagedFleetConfiguration;
    }
  | {
      ServiceManagedEc2: ServiceManagedEc2FleetConfiguration;
    };
/**
 * Type definition for `AWS::Deadline::Fleet.FleetStatus`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-fleetstatus.html}
 */
export type FleetStatus =
  | "ACTIVE"
  | "CREATE_IN_PROGRESS"
  | "UPDATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "UPDATE_FAILED";
/**
 * Type definition for `AWS::Deadline::Fleet.MemoryMiBRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-memorymibrange.html}
 */
export type MemoryMiBRange = {
  /**
   * @min `512`
   * @max `2147483647`
   */
  Max?: number;
  /**
   * @min `512`
   * @max `2147483647`
   */
  Min: number;
};
/**
 * Type definition for `AWS::Deadline::Fleet.ServiceManagedEc2FleetConfiguration`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-servicemanagedec2fleetconfiguration.html}
 */
export type ServiceManagedEc2FleetConfiguration = {
  InstanceCapabilities: ServiceManagedEc2InstanceCapabilities;
  InstanceMarketOptions: ServiceManagedEc2InstanceMarketOptions;
};
/**
 * Type definition for `AWS::Deadline::Fleet.ServiceManagedEc2InstanceCapabilities`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-servicemanagedec2instancecapabilities.html}
 */
export type ServiceManagedEc2InstanceCapabilities = {
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  AllowedInstanceTypes?: string[];
  CpuArchitectureType: CpuArchitectureType;
  /**
   * @minLength `1`
   * @maxLength `15`
   */
  CustomAmounts?: FleetAmountCapability[];
  /**
   * @minLength `1`
   * @maxLength `15`
   */
  CustomAttributes?: FleetAttributeCapability[];
  /**
   * @minLength `1`
   * @maxLength `100`
   */
  ExcludedInstanceTypes?: string[];
  MemoryMiB: MemoryMiBRange;
  OsFamily: ServiceManagedFleetOperatingSystemFamily;
  RootEbsVolume?: Ec2EbsVolume;
  VCpuCount: VCpuCountRange;
};
/**
 * Type definition for `AWS::Deadline::Fleet.ServiceManagedEc2InstanceMarketOptions`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-servicemanagedec2instancemarketoptions.html}
 */
export type ServiceManagedEc2InstanceMarketOptions = {
  Type: Ec2MarketType;
};
/**
 * Type definition for `AWS::Deadline::Fleet.ServiceManagedFleetOperatingSystemFamily`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-servicemanagedfleetoperatingsystemfamily.html}
 */
export type ServiceManagedFleetOperatingSystemFamily = "WINDOWS" | "LINUX";
/**
 * Type definition for `AWS::Deadline::Fleet.VCpuCountRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-deadline-fleet-vcpucountrange.html}
 */
export type VCpuCountRange = {
  /**
   * @min `1`
   * @max `10000`
   */
  Max?: number;
  /**
   * @min `1`
   * @max `10000`
   */
  Min: number;
};
/**
 * Definition of AWS::Deadline::Fleet Resource Type
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html}
 */
export class DeadlineFleet extends $Resource<
  "AWS::Deadline::Fleet",
  DeadlineFleetProperties,
  DeadlineFleetAttributes
> {
  public static readonly Type = "AWS::Deadline::Fleet";
  constructor(
    logicalId: string,
    properties: DeadlineFleetProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, DeadlineFleet.Type, properties, options);
  }
}
