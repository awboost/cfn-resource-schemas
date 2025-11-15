import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource type definition for `AWS::MediaConnect::RouterOutput`.
 * Represents a router input in AWS Elemental MediaConnect that can be used to egress content transmitted from router inputs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-routeroutput.html}
 */
export type MediaConnectRouterOutputProperties = {
  /**
   * The Availability Zone where you want to create the router output. This must be a valid Availability Zone for the region specified by regionName, or the current region if no regionName is provided.
   */
  AvailabilityZone?: string;
  /**
   * The configuration settings for a router output.
   */
  Configuration: RouterOutputConfiguration;
  /**
   * The configuration settings for maintenance operations, including preferred maintenance windows and schedules.
   */
  MaintenanceConfiguration?: MaintenanceConfiguration;
  /**
   * The maximum bitrate for the router output.
   */
  MaximumBitrate: number;
  /**
   * The name of the router output.
   * @minLength `1`
   * @maxLength `128`
   */
  Name: string;
  /**
   * The AWS Region for the router output. Defaults to the current region if not specified.
   */
  RegionName?: string;
  RoutingScope: RoutingScope;
  /**
   * Key-value pairs that can be used to tag this router output.
   */
  Tags?: Tag[];
  Tier: RouterOutputTier;
};
/**
 * Attribute type definition for `AWS::MediaConnect::RouterOutput`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-routeroutput.html#aws-resource-mediaconnect-routeroutput-return-values}
 */
export type MediaConnectRouterOutputAttributes = {
  /**
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:routerOutput:[a-z0-9]{12}$`
   */
  Arn: string;
  /**
   * The timestamp when the router output was created.
   */
  CreatedAt: string;
  /**
   * The unique identifier of the router output.
   */
  Id: string;
  /**
   * The IP address of the router output.
   */
  IpAddress: string;
  MaintenanceType: MaintenanceType;
  OutputType: RouterOutputType;
  RoutedState: RouterOutputRoutedState;
  State: RouterOutputState;
  /**
   * The timestamp when the router output was last updated.
   */
  UpdatedAt: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.AutomaticEncryptionKeyConfiguration`.
 * Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-automaticencryptionkeyconfiguration.html}
 */
export type AutomaticEncryptionKeyConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.Day`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-day.html}
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
 * Type definition for `AWS::MediaConnect::RouterOutput.DefaultMaintenanceConfiguration`.
 * Configuration settings for default maintenance scheduling.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-defaultmaintenanceconfiguration.html}
 */
export type DefaultMaintenanceConfiguration = Record<string, any>;
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.FlowTransitEncryption`.
 * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-flowtransitencryption.html}
 */
export type FlowTransitEncryption = {
  /**
   * Configuration settings for flow transit encryption keys.
   */
  EncryptionKeyConfiguration: FlowTransitEncryptionKeyConfiguration;
  EncryptionKeyType?: FlowTransitEncryptionKeyType;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.FlowTransitEncryptionKeyConfiguration`.
 * Configuration settings for flow transit encryption keys.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-flowtransitencryptionkeyconfiguration.html}
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
 * Type definition for `AWS::MediaConnect::RouterOutput.FlowTransitEncryptionKeyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-flowtransitencryptionkeytype.html}
 */
export type FlowTransitEncryptionKeyType = "SECRETS_MANAGER" | "AUTOMATIC";
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.ForwardErrorCorrectionState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-forwarderrorcorrectionstate.html}
 */
export type ForwardErrorCorrectionState = "ENABLED" | "DISABLED";
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.MaintenanceConfiguration`.
 * The configuration settings for maintenance operations, including preferred maintenance windows and schedules.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-maintenanceconfiguration.html}
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
 * Type definition for `AWS::MediaConnect::RouterOutput.MaintenanceType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-maintenancetype.html}
 */
export type MaintenanceType = "PREFERRED_DAY_TIME" | "DEFAULT";
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.MediaConnectFlowRouterOutputConfiguration`.
 * Configuration settings for connecting a router output to a MediaConnect flow source.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-mediaconnectflowrouteroutputconfiguration.html}
 */
export type MediaConnectFlowRouterOutputConfiguration = {
  /**
   * The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.
   */
  DestinationTransitEncryption: FlowTransitEncryption;
  /**
   * The ARN of the flow to connect to this router output.
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:flow:[a-zA-Z0-9-]+:[a-zA-Z0-9_-]+$`
   */
  FlowArn?: string;
  /**
   * The ARN of the flow source to connect to this router output.
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:source:[a-zA-Z0-9-]+:[a-zA-Z0-9_-]+$`
   */
  FlowSourceArn?: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.MediaLiveInputPipelineId`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-medialiveinputpipelineid.html}
 */
export type MediaLiveInputPipelineId = "PIPELINE_0" | "PIPELINE_1";
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.MediaLiveInputRouterOutputConfiguration`.
 * Configuration settings for connecting a router output to a MediaLive input.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-medialiveinputrouteroutputconfiguration.html}
 */
export type MediaLiveInputRouterOutputConfiguration = {
  /**
   * The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. This configuration determines whether encryption keys are automatically managed by the service or manually managed through AWS Secrets Manager.
   */
  DestinationTransitEncryption: MediaLiveTransitEncryption;
  /**
   * The ARN of the MediaLive input to connect to this router output.
   * @pattern `^arn:(aws[a-zA-Z-]*):medialive:[a-z0-9-]+:[0-9]{12}:input:[a-zA-Z0-9]+$`
   */
  MediaLiveInputArn?: string;
  MediaLivePipelineId?: MediaLiveInputPipelineId;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.MediaLiveTransitEncryption`.
 * The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. This configuration determines whether encryption keys are automatically managed by the service or manually managed through AWS Secrets Manager.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-medialivetransitencryption.html}
 */
export type MediaLiveTransitEncryption = {
  /**
   * Configuration settings for the MediaLive transit encryption key.
   */
  EncryptionKeyConfiguration: MediaLiveTransitEncryptionKeyConfiguration;
  EncryptionKeyType?: MediaLiveTransitEncryptionKeyType;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.MediaLiveTransitEncryptionKeyConfiguration`.
 * Configuration settings for the MediaLive transit encryption key.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-medialivetransitencryptionkeyconfiguration.html}
 */
export type MediaLiveTransitEncryptionKeyConfiguration =
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
 * Type definition for `AWS::MediaConnect::RouterOutput.MediaLiveTransitEncryptionKeyType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-medialivetransitencryptionkeytype.html}
 */
export type MediaLiveTransitEncryptionKeyType = "SECRETS_MANAGER" | "AUTOMATIC";
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.PreferredDayTimeMaintenanceConfiguration`.
 * Configuration for preferred day and time maintenance settings.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-preferreddaytimemaintenanceconfiguration.html}
 */
export type PreferredDayTimeMaintenanceConfiguration = {
  Day: Day;
  /**
   * The preferred time for maintenance operations.
   */
  Time: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.RistRouterOutputConfiguration`.
 * The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-ristrouteroutputconfiguration.html}
 */
export type RistRouterOutputConfiguration = {
  /**
   * The destination IP address for the RIST protocol in the router output configuration.
   */
  DestinationAddress: string;
  /**
   * The destination port number for the RIST protocol in the router output configuration.
   * @min `0`
   * @max `65535`
   */
  DestinationPort: number;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.RouterOutputConfiguration`.
 * The configuration settings for a router output.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-routeroutputconfiguration.html}
 */
export type RouterOutputConfiguration =
  | {
      /**
       * The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone.
       */
      Standard: StandardRouterOutputConfiguration;
    }
  | {
      /**
       * Configuration settings for connecting a router output to a MediaConnect flow source.
       */
      MediaConnectFlow: MediaConnectFlowRouterOutputConfiguration;
    }
  | {
      /**
       * Configuration settings for connecting a router output to a MediaLive input.
       */
      MediaLiveInput: MediaLiveInputRouterOutputConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.RouterOutputProtocol`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-routeroutputprotocol.html}
 */
export type RouterOutputProtocol =
  | "RTP"
  | "RIST"
  | "SRT_CALLER"
  | "SRT_LISTENER";
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.RouterOutputProtocolConfiguration`.
 * The protocol configuration settings for a router output.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-routeroutputprotocolconfiguration.html}
 */
export type RouterOutputProtocolConfiguration =
  | {
      /**
       * The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state.
       */
      Rtp: RtpRouterOutputConfiguration;
    }
  | {
      /**
       * The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port.
       */
      Rist: RistRouterOutputConfiguration;
    }
  | {
      /**
       * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration.
       */
      SrtListener: SrtListenerRouterOutputConfiguration;
    }
  | {
      /**
       * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration.
       */
      SrtCaller: SrtCallerRouterOutputConfiguration;
    };
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.RouterOutputRoutedState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-routeroutputroutedstate.html}
 */
export type RouterOutputRoutedState = "ROUTED" | "ROUTING" | "UNROUTED";
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.RouterOutputState`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-routeroutputstate.html}
 */
export type RouterOutputState =
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
 * Type definition for `AWS::MediaConnect::RouterOutput.RouterOutputTier`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-routeroutputtier.html}
 */
export type RouterOutputTier = "OUTPUT_100" | "OUTPUT_50" | "OUTPUT_20";
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.RouterOutputType`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-routeroutputtype.html}
 */
export type RouterOutputType =
  | "STANDARD"
  | "MEDIACONNECT_FLOW"
  | "MEDIALIVE_INPUT";
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.RoutingScope`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-routingscope.html}
 */
export type RoutingScope = "REGIONAL" | "GLOBAL";
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.RtpRouterOutputConfiguration`.
 * The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-rtprouteroutputconfiguration.html}
 */
export type RtpRouterOutputConfiguration = {
  /**
   * The destination IP address for the RTP protocol in the router output configuration.
   */
  DestinationAddress: string;
  /**
   * The destination port number for the RTP protocol in the router output configuration.
   * @min `0`
   * @max `65531`
   */
  DestinationPort: number;
  ForwardErrorCorrection?: ForwardErrorCorrectionState;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.SecretsManagerEncryptionKeyConfiguration`.
 * The configuration settings for transit encryption using AWS Secrets Manager, including the secret ARN and role ARN.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-secretsmanagerencryptionkeyconfiguration.html}
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
 * Type definition for `AWS::MediaConnect::RouterOutput.SrtCallerRouterOutputConfiguration`.
 * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-srtcallerrouteroutputconfiguration.html}
 */
export type SrtCallerRouterOutputConfiguration = {
  /**
   * The destination IP address for the SRT protocol in caller mode.
   */
  DestinationAddress: string;
  /**
   * The destination port number for the SRT protocol in caller mode.
   * @min `0`
   * @max `65535`
   */
  DestinationPort: number;
  /**
   * Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.
   */
  EncryptionConfiguration?: SrtEncryptionConfiguration;
  /**
   * The minimum latency in milliseconds for the SRT protocol in caller mode.
   * @min `10`
   * @max `10000`
   */
  MinimumLatencyMilliseconds: number;
  /**
   * The stream ID for the SRT protocol in caller mode.
   */
  StreamId?: string;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.SrtEncryptionConfiguration`.
 * Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-srtencryptionconfiguration.html}
 */
export type SrtEncryptionConfiguration = {
  /**
   * The configuration settings for transit encryption using AWS Secrets Manager, including the secret ARN and role ARN.
   */
  EncryptionKey: SecretsManagerEncryptionKeyConfiguration;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.SrtListenerRouterOutputConfiguration`.
 * The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-srtlistenerrouteroutputconfiguration.html}
 */
export type SrtListenerRouterOutputConfiguration = {
  /**
   * Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.
   */
  EncryptionConfiguration?: SrtEncryptionConfiguration;
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
 * Type definition for `AWS::MediaConnect::RouterOutput.StandardRouterOutputConfiguration`.
 * The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-standardrouteroutputconfiguration.html}
 */
export type StandardRouterOutputConfiguration = {
  /**
   * The Amazon Resource Name (ARN) of the network interface associated with the standard router output.
   * @pattern `^arn:(aws[a-zA-Z-]*):mediaconnect:[a-z0-9-]+:[0-9]{12}:routerNetworkInterface:[a-z0-9]{12}$`
   */
  NetworkInterfaceArn: string;
  Protocol?: RouterOutputProtocol;
  /**
   * The protocol configuration settings for a router output.
   */
  ProtocolConfiguration: RouterOutputProtocolConfiguration;
};
/**
 * Type definition for `AWS::MediaConnect::RouterOutput.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconnect-routeroutput-tag.html}
 */
export type Tag = {
  Key: string;
  Value: string;
};
/**
 * Resource type definition for `AWS::MediaConnect::RouterOutput`.
 * Represents a router input in AWS Elemental MediaConnect that can be used to egress content transmitted from router inputs
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-routeroutput.html}
 */
export class MediaConnectRouterOutput extends $Resource<
  "AWS::MediaConnect::RouterOutput",
  MediaConnectRouterOutputProperties,
  MediaConnectRouterOutputAttributes
> {
  public static readonly Type = "AWS::MediaConnect::RouterOutput";
  constructor(
    logicalId: string,
    properties: MediaConnectRouterOutputProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaConnectRouterOutput.Type, properties, options);
  }
}
