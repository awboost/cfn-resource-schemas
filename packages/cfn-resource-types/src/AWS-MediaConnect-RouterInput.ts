import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::MediaConnect::RouterInput`.
 * Represents a router input in AWS Elemental MediaConnect that is used to ingest content to be transmitted to router outputs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-routerinput.html}
 */
export type MediaConnectRouterInputProperties = {
  /**
   * The Availability Zone where you want to create the router input. This must be a valid Availability Zone for the region specified by regionName, or the current region if no regionName is provided.
   */
  AvailabilityZone?: string;
  /**
   * The configuration settings for a router input.
   */
  Configuration: RouterInputConfiguration;
  /**
   * The configuration settings for maintenance operations, including preferred maintenance windows and schedules.
   */
  MaintenanceConfiguration?: MaintenanceConfiguration;
  /**
   * The maximum bitrate for the router input.
   */
  MaximumBitrate: number;
  /**
   * The name of the router input.
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * The AWS Region for the router input. Defaults to the current region if not specified.
   */
  RegionName?: string;
  RoutingScope: RoutingScope;
  /**
   * Key-value pairs that can be used to tag and organize this router input.
   */
  Tags?: Tag[];
  Tier: RouterInputTier;
  /**
   * The transit encryption settings for a router input.
   */
  TransitEncryption?: RouterInputTransitEncryption;
};
/**
 * Attribute type definition for `AWS::MediaConnect::RouterInput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-routerinput.html#aws-resource-mediaconnect-routerinput-return-values}
 */
export type MediaConnectRouterInputAttributes = {
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:routerInput:[a-z0-9]{12}$`
   */
  Arn: string;
  /**
   * The timestamp when the router input was created.
   */
  CreatedAt: string;
  /**
   * The unique identifier of the router input.
   */
  Id: string;
  InputType: RouterInputType;
  /**
   * The IP address of the router input.
   */
  IpAddress: string;
  MaintenanceType: MaintenanceType;
  /**
   * The number of router outputs associated with the router input.
   */
  RoutedOutputs: number;
  State: RouterInputState;
  /**
   * The timestamp when the router input was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.AutomaticEncryptionKeyConfiguration`.
 * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-automaticencryptionkeyconfiguration.html}
 */
export type AutomaticEncryptionKeyConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::MediaConnect::RouterInput.Day`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-day.html}
 */
export type Day =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.DefaultMaintenanceConfiguration`.
 * Configuration settings for default maintenance scheduling.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-defaultmaintenanceconfiguration.html}
 */
export type DefaultMaintenanceConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::MediaConnect::RouterInput.FailoverInputSourcePriorityMode`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-failoverinputsourceprioritymode.html}
 */
export type FailoverInputSourcePriorityMode =
  | "NO_PRIORITY"
  | "PRIMARY_SECONDARY";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.FailoverRouterInputConfiguration`.
 * Configuration settings for a failover router input that allows switching between two input sources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-failoverrouterinputconfiguration.html}
 */
export type FailoverRouterInputConfiguration = {
  /**
   * The ARN of the network interface to use for this failover router input.
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:routerNetworkInterface:[a-z0-9]{12}$`
   */
  NetworkInterfaceArn: string;
  /**
   * The index (0 or 1) that specifies which source in the protocol configurations list is currently active. Used to control which of the two failover sources is currently selected. This field is ignored when sourcePriorityMode is set to NO_PRIORITY
   * @min `0`
   * @max `1`
   */
  PrimarySourceIndex?: number;
  /**
   * A list of exactly two protocol configurations for the failover input sources. Both must use the same protocol type.
   */
  ProtocolConfigurations: FailoverRouterInputProtocolConfiguration[];
  SourcePriorityMode: FailoverInputSourcePriorityMode;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.FailoverRouterInputProtocolConfiguration`.
 * Protocol configuration settings for failover router inputs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-failoverrouterinputprotocolconfiguration.html}
 */
export type FailoverRouterInputProtocolConfiguration =
  | {
      /**
       * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
       */
      Rtp: RtpRouterInputConfiguration;
    }
  | {
      /**
       * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
       */
      Rist: RistRouterInputConfiguration;
    }
  | {
      /**
       * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.
       */
      SrtListener: SrtListenerRouterInputConfiguration;
    }
  | {
      /**
       * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.
       */
      SrtCaller: SrtCallerRouterInputConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::RouterInput.FlowTransitEncryption`.
 * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-flowtransitencryption.html}
 */
export type FlowTransitEncryption = {
  /**
   * Configuration settings for flow transit encryption keys.
   */
  EncryptionKeyConfiguration: FlowTransitEncryptionKeyConfiguration;
  EncryptionKeyType?: FlowTransitEncryptionKeyType;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.FlowTransitEncryptionKeyConfiguration`.
 * Configuration settings for flow transit encryption keys.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-flowtransitencryptionkeyconfiguration.html}
 */
export type FlowTransitEncryptionKeyConfiguration =
  | {
      /**
       * The configuration settings for transit encryption using AWS Secrets Manager, including the secret ARN and role ARN.
       */
      SecretsManager: SecretsManagerEncryptionKeyConfiguration;
    }
  | {
      /**
       * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
       */
      Automatic: AutomaticEncryptionKeyConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::RouterInput.FlowTransitEncryptionKeyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-flowtransitencryptionkeytype.html}
 */
export type FlowTransitEncryptionKeyType = "SECRETS_MANAGER" | "AUTOMATIC";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.ForwardErrorCorrectionState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-forwarderrorcorrectionstate.html}
 */
export type ForwardErrorCorrectionState = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.MaintenanceConfiguration`.
 * The configuration settings for maintenance operations, including preferred maintenance windows and schedules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-maintenanceconfiguration.html}
 */
export type MaintenanceConfiguration =
  | {
      /**
       * Configuration for preferred day and time maintenance settings.
       */
      PreferredDayTime: PreferredDayTimeMaintenanceConfiguration;
    }
  | {
      /**
       * Configuration settings for default maintenance scheduling.
       */
      Default: DefaultMaintenanceConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::RouterInput.MaintenanceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-maintenancetype.html}
 */
export type MaintenanceType = "PREFERRED_DAY_TIME" | "DEFAULT";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.MediaConnectFlowRouterInputConfiguration`.
 * Configuration settings for connecting a router input to a flow output.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-mediaconnectflowrouterinputconfiguration.html}
 */
export type MediaConnectFlowRouterInputConfiguration = {
  /**
   * The ARN of the flow to connect to.
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:flow:[a-zA-Z0-9-]+:[a-zA-Z0-9_-]+$`
   */
  FlowArn?: string;
  /**
   * The ARN of the flow output to connect to this router input.
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:output:[a-zA-Z0-9-]+:[a-zA-Z0-9_-]+$`
   */
  FlowOutputArn?: string;
  /**
   * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
   */
  SourceTransitDecryption: FlowTransitEncryption;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.MergeRouterInputConfiguration`.
 * Configuration settings for a merge router input that combines two input sources.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-mergerouterinputconfiguration.html}
 */
export type MergeRouterInputConfiguration = {
  /**
   * The time window in milliseconds for merging the two input sources.
   */
  MergeRecoveryWindowMilliseconds: number;
  /**
   * The ARN of the network interface to use for this merge router input.
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:routerNetworkInterface:[a-z0-9]{12}$`
   */
  NetworkInterfaceArn: string;
  /**
   * A list of exactly two protocol configurations for the merge input sources. Both must use the same protocol type.
   */
  ProtocolConfigurations: MergeRouterInputProtocolConfiguration[];
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.MergeRouterInputProtocolConfiguration`.
 * Protocol configuration settings for merge router inputs.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-mergerouterinputprotocolconfiguration.html}
 */
export type MergeRouterInputProtocolConfiguration =
  | {
      /**
       * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
       */
      Rtp: RtpRouterInputConfiguration;
    }
  | {
      /**
       * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
       */
      Rist: RistRouterInputConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::RouterInput.PreferredDayTimeMaintenanceConfiguration`.
 * Configuration for preferred day and time maintenance settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-preferreddaytimemaintenanceconfiguration.html}
 */
export type PreferredDayTimeMaintenanceConfiguration = {
  Day: Day;
  /**
   * The preferred time for maintenance operations.
   */
  Time: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RistRouterInputConfiguration`.
 * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-ristrouterinputconfiguration.html}
 */
export type RistRouterInputConfiguration = {
  /**
   * The port number used for the RIST protocol in the router input configuration.
   * @min `3000`
   * @max `30000`
   */
  Port: number;
  /**
   * The recovery latency in milliseconds for the RIST protocol in the router input configuration.
   * @min `10`
   * @max `10000`
   */
  RecoveryLatencyMilliseconds: number;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RouterInputConfiguration`.
 * The configuration settings for a router input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-routerinputconfiguration.html}
 */
export type RouterInputConfiguration =
  | {
      /**
       * The configuration settings for a standard router input, including the protocol, protocol-specific configuration, network interface, and availability zone.
       */
      Standard: StandardRouterInputConfiguration;
    }
  | {
      /**
       * Configuration settings for a failover router input that allows switching between two input sources.
       */
      Failover: FailoverRouterInputConfiguration;
    }
  | {
      /**
       * Configuration settings for a merge router input that combines two input sources.
       */
      Merge: MergeRouterInputConfiguration;
    }
  | {
      /**
       * Configuration settings for connecting a router input to a flow output.
       */
      MediaConnectFlow: MediaConnectFlowRouterInputConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RouterInputProtocol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-routerinputprotocol.html}
 */
export type RouterInputProtocol =
  | "RTP"
  | "RIST"
  | "SRT_CALLER"
  | "SRT_LISTENER";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RouterInputProtocolConfiguration`.
 * The protocol configuration settings for a router input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-routerinputprotocolconfiguration.html}
 */
export type RouterInputProtocolConfiguration =
  | {
      /**
       * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
       */
      Rtp: RtpRouterInputConfiguration;
    }
  | {
      /**
       * The configuration settings for a router input using the RIST (Reliable Internet Stream Transport) protocol, including the port and recovery latency.
       */
      Rist: RistRouterInputConfiguration;
    }
  | {
      /**
       * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.
       */
      SrtListener: SrtListenerRouterInputConfiguration;
    }
  | {
      /**
       * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.
       */
      SrtCaller: SrtCallerRouterInputConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RouterInputState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-routerinputstate.html}
 */
export type RouterInputState =
  | "CREATING"
  | "STANDBY"
  | "STARTING"
  | "ACTIVE"
  | "STOPPING"
  | "DELETING"
  | "UPDATING"
  | "ERROR"
  | "RECOVERING"
  | "MIGRATING";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RouterInputTier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-routerinputtier.html}
 */
export type RouterInputTier = "INPUT_100" | "INPUT_50" | "INPUT_20";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RouterInputTransitEncryption`.
 * The transit encryption settings for a router input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-routerinputtransitencryption.html}
 */
export type RouterInputTransitEncryption = {
  /**
   * Defines the configuration settings for transit encryption keys.
   */
  EncryptionKeyConfiguration: RouterInputTransitEncryptionKeyConfiguration;
  EncryptionKeyType?: RouterInputTransitEncryptionKeyType;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RouterInputTransitEncryptionKeyConfiguration`.
 * Defines the configuration settings for transit encryption keys.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-routerinputtransitencryptionkeyconfiguration.html}
 */
export type RouterInputTransitEncryptionKeyConfiguration =
  | {
      /**
       * The configuration settings for transit encryption using AWS Secrets Manager, including the secret ARN and role ARN.
       */
      SecretsManager: SecretsManagerEncryptionKeyConfiguration;
    }
  | {
      /**
       * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
       */
      Automatic: AutomaticEncryptionKeyConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RouterInputTransitEncryptionKeyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-routerinputtransitencryptionkeytype.html}
 */
export type RouterInputTransitEncryptionKeyType =
  | "SECRETS_MANAGER"
  | "AUTOMATIC";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RouterInputType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-routerinputtype.html}
 */
export type RouterInputType =
  | "STANDARD"
  | "FAILOVER"
  | "MERGE"
  | "MEDIACONNECT_FLOW";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RoutingScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-routingscope.html}
 */
export type RoutingScope = "REGIONAL" | "GLOBAL";
/**
 * Type definition for `AWS::MediaConnect::RouterInput.RtpRouterInputConfiguration`.
 * The configuration settings for a Router Input using the RTP (Real-Time Transport Protocol) protocol, including the port and forward error correction state.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-rtprouterinputconfiguration.html}
 */
export type RtpRouterInputConfiguration = {
  ForwardErrorCorrection?: ForwardErrorCorrectionState;
  /**
   * The port number used for the RTP protocol in the router input configuration.
   * @min `3000`
   * @max `30000`
   */
  Port: number;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.SecretsManagerEncryptionKeyConfiguration`.
 * The configuration settings for transit encryption using AWS Secrets Manager, including the secret ARN and role ARN.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-secretsmanagerencryptionkeyconfiguration.html}
 */
export type SecretsManagerEncryptionKeyConfiguration = {
  /**
   * The ARN of the IAM role assumed by MediaConnect to access the AWS Secrets Manager secret.
   * @pattern `^arn:(aws[a-zA-Z-]*):iam::[0-9]{12}:role/[a-zA-Z0-9_+=,.@-]+$`
   */
  RoleArn: string;
  /**
   * The ARN of the AWS Secrets Manager secret used for transit encryption.
   * @pattern `^arn:(aws[a-zA-Z-]*):secretsmanager:[a-z0-9-]+:[0-9]{12}:secret:[a-zA-Z0-9/_+=.@-]+$`
   */
  SecretArn: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.SrtCallerRouterInputConfiguration`.
 * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in caller mode, including the source address and port, minimum latency, stream ID, and decryption key configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-srtcallerrouterinputconfiguration.html}
 */
export type SrtCallerRouterInputConfiguration = {
  /**
   * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
   */
  DecryptionConfiguration?: SrtDecryptionConfiguration;
  /**
   * The minimum latency in milliseconds for the SRT protocol in caller mode.
   * @min `10`
   * @max `10000`
   */
  MinimumLatencyMilliseconds: number;
  /**
   * The source IP address for the SRT protocol in caller mode.
   */
  SourceAddress: string;
  /**
   * The source port number for the SRT protocol in caller mode.
   * @min `0`
   * @max `65535`
   */
  SourcePort: number;
  /**
   * The stream ID for the SRT protocol in caller mode.
   */
  StreamId?: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.SrtDecryptionConfiguration`.
 * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-srtdecryptionconfiguration.html}
 */
export type SrtDecryptionConfiguration = {
  /**
   * The configuration settings for transit encryption using AWS Secrets Manager, including the secret ARN and role ARN.
   */
  EncryptionKey: SecretsManagerEncryptionKeyConfiguration;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.SrtListenerRouterInputConfiguration`.
 * The configuration settings for a router input using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and decryption key configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-srtlistenerrouterinputconfiguration.html}
 */
export type SrtListenerRouterInputConfiguration = {
  /**
   * Contains the configuration settings for decrypting SRT streams, including the encryption key details and decryption parameters.
   */
  DecryptionConfiguration?: SrtDecryptionConfiguration;
  /**
   * The minimum latency in milliseconds for the SRT protocol in listener mode.
   * @min `10`
   * @max `10000`
   */
  MinimumLatencyMilliseconds: number;
  /**
   * The port number for the SRT protocol in listener mode.
   * @min `3000`
   * @max `30000`
   */
  Port: number;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.StandardRouterInputConfiguration`.
 * The configuration settings for a standard router input, including the protocol, protocol-specific configuration, network interface, and availability zone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-standardrouterinputconfiguration.html}
 */
export type StandardRouterInputConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the network interface associated with the standard router input.
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:routerNetworkInterface:[a-z0-9]{12}$`
   */
  NetworkInterfaceArn: string;
  Protocol?: RouterInputProtocol;
  /**
   * The protocol configuration settings for a router input.
   */
  ProtocolConfiguration: RouterInputProtocolConfiguration;
};
/**
 * Type definition for `AWS::MediaConnect::RouterInput.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routerinput-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource type definition for `AWS::MediaConnect::RouterInput`.
 * Represents a router input in AWS Elemental MediaConnect that is used to ingest content to be transmitted to router outputs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-routerinput.html}
 */
export class MediaConnectRouterInput extends $Resource<
  "AWS::MediaConnect::RouterInput",
  MediaConnectRouterInputProperties,
  MediaConnectRouterInputAttributes
> {
  public static readonly Type = "AWS::MediaConnect::RouterInput";
  constructor(
    logicalId: string,
    properties: MediaConnectRouterInputProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaConnectRouterInput.Type, properties, options);
  }
}
