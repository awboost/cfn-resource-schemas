import { Resource as $Resource } from "@awboost/cfn-template-builder/template/resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource Type definition for AWS::MediaLive::Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html}
 */
export type MediaLiveInputProperties = {
  Destinations?: InputDestinationRequest[];
  InputDevices?: InputDeviceSettings[];
  InputNetworkLocation?: string;
  InputSecurityGroups?: string[];
  MediaConnectFlows?: MediaConnectFlowRequest[];
  MulticastSettings?: MulticastSettingsCreateRequest;
  Name?: string;
  RoleArn?: string;
  RouterSettings?: RouterSettings;
  SdiSources?: string[];
  Smpte2110ReceiverGroupSettings?: Smpte2110ReceiverGroupSettings;
  Sources?: InputSourceRequest[];
  SrtSettings?: SrtSettingsRequest;
  Tags?: Record<string, any>;
  Type?: string;
  Vpc?: InputVpcRequest;
};
/**
 * Attribute type definition for `AWS::MediaLive::Input`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#aws-resource-medialive-input-return-values}
 */
export type MediaLiveInputAttributes = {
  Arn: string;
  Id: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.InputDestinationRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdestinationrequest.html}
 */
export type InputDestinationRequest = {
  Network?: string;
  NetworkRoutes?: InputRequestDestinationRoute[];
  StaticIpAddress?: string;
  StreamName?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.InputDeviceSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdevicesettings.html}
 */
export type InputDeviceSettings = {
  Id?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.InputRequestDestinationRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputrequestdestinationroute.html}
 */
export type InputRequestDestinationRoute = {
  Cidr?: string;
  Gateway?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.InputSdpLocation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputsdplocation.html}
 */
export type InputSdpLocation = {
  MediaIndex?: number;
  SdpUrl?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.InputSourceRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputsourcerequest.html}
 */
export type InputSourceRequest = {
  PasswordParam?: string;
  Url?: string;
  Username?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.InputVpcRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputvpcrequest.html}
 */
export type InputVpcRequest = {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
};
/**
 * Type definition for `AWS::MediaLive::Input.MediaConnectFlowRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-mediaconnectflowrequest.html}
 */
export type MediaConnectFlowRequest = {
  FlowArn?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.MulticastSettingsCreateRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-multicastsettingscreaterequest.html}
 */
export type MulticastSettingsCreateRequest = {
  Sources?: MulticastSourceCreateRequest[];
};
/**
 * Type definition for `AWS::MediaLive::Input.MulticastSourceCreateRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-multicastsourcecreaterequest.html}
 */
export type MulticastSourceCreateRequest = {
  SourceIp?: string;
  Url?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.RouterDestinationSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-routerdestinationsettings.html}
 */
export type RouterDestinationSettings = {
  AvailabilityZoneName?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.RouterSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-routersettings.html}
 */
export type RouterSettings = {
  Destinations?: RouterDestinationSettings[];
  EncryptionType?: string;
  SecretArn?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.Smpte2110ReceiverGroup`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-smpte2110receivergroup.html}
 */
export type Smpte2110ReceiverGroup = {
  SdpSettings?: Smpte2110ReceiverGroupSdpSettings;
};
/**
 * Type definition for `AWS::MediaLive::Input.Smpte2110ReceiverGroupSdpSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-smpte2110receivergroupsdpsettings.html}
 */
export type Smpte2110ReceiverGroupSdpSettings = {
  AncillarySdps?: InputSdpLocation[];
  AudioSdps?: InputSdpLocation[];
  VideoSdp?: InputSdpLocation;
};
/**
 * Type definition for `AWS::MediaLive::Input.Smpte2110ReceiverGroupSettings`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-smpte2110receivergroupsettings.html}
 */
export type Smpte2110ReceiverGroupSettings = {
  Smpte2110ReceiverGroups?: Smpte2110ReceiverGroup[];
};
/**
 * Type definition for `AWS::MediaLive::Input.SrtCallerDecryptionRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallerdecryptionrequest.html}
 */
export type SrtCallerDecryptionRequest = {
  Algorithm?: string;
  PassphraseSecretArn?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.SrtCallerSourceRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallersourcerequest.html}
 */
export type SrtCallerSourceRequest = {
  Decryption?: SrtCallerDecryptionRequest;
  MinimumLatency?: number;
  SrtListenerAddress?: string;
  SrtListenerPort?: string;
  StreamId?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.SrtListenerDecryptionRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtlistenerdecryptionrequest.html}
 */
export type SrtListenerDecryptionRequest = {
  Algorithm?: string;
  PassphraseSecretArn?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.SrtListenerSettingsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtlistenersettingsrequest.html}
 */
export type SrtListenerSettingsRequest = {
  Decryption?: SrtListenerDecryptionRequest;
  MinimumLatency?: number;
  StreamId?: string;
};
/**
 * Type definition for `AWS::MediaLive::Input.SrtSettingsRequest`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtsettingsrequest.html}
 */
export type SrtSettingsRequest = {
  SrtCallerSources?: SrtCallerSourceRequest[];
  SrtListenerSettings?: SrtListenerSettingsRequest;
};
/**
 * Resource Type definition for AWS::MediaLive::Input
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html}
 */
export class MediaLiveInput extends $Resource<
  "AWS::MediaLive::Input",
  MediaLiveInputProperties,
  MediaLiveInputAttributes
> {
  public static readonly Type = "AWS::MediaLive::Input";
  constructor(
    logicalId: string,
    properties: MediaLiveInputProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, MediaLiveInput.Type, properties, options);
  }
}
