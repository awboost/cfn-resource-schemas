import { Resource as $Resource } from "../template/Resource.js";
import { ResourceOptions as $ResourceOptions } from "../template.js";
/**
 * Resource Type definition for AWS::Lightsail::Container
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html}
 */
export type LightsailContainerProperties = {
  /**
   * Describes a container deployment configuration of an Amazon Lightsail container service.
   */
  ContainerServiceDeployment?: ContainerServiceDeployment;
  /**
   * A Boolean value to indicate whether the container service is disabled.
   */
  IsDisabled?: boolean;
  /**
   * The power specification for the container service.
   */
  Power: string;
  /**
   * A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.
   */
  PrivateRegistryAccess?: PrivateRegistryAccess;
  /**
   * The public domain names to use with the container service, such as example.com and www.example.com.
   */
  PublicDomainNames?: PublicDomainName[];
  /**
   * The scale specification for the container service.
   * @min `1`
   * @max `20`
   */
  Scale: number;
  /**
   * The name for the container service.
   * @minLength `1`
   * @maxLength `63`
   * @pattern `^[a-z0-9]{1,2}|[a-z0-9][a-z0-9-]+[a-z0-9]$`
   */
  ServiceName: string;
  /**
   * An array of key-value pairs to apply to this resource.
   */
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::Lightsail::Container`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html#aws-resource-lightsail-container-return-values}
 */
export type LightsailContainerAttributes = {
  ContainerArn: string;
  /**
   * The principal ARN of the container service.
   */
  PrincipalArn: string;
  /**
   * The publicly accessible URL of the container service.
   */
  Url: string;
};
/**
 * Type definition for `AWS::Lightsail::Container.Container`.
 * Describes the settings of a container that will be launched, or that is launched, to an Amazon Lightsail container service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-container.html}
 */
export type Container = {
  /**
   * The launch command for the container.
   */
  Command?: string[];
  /**
   * The name of the container.
   */
  ContainerName?: string;
  /**
   * The environment variables of the container.
   */
  Environment?: EnvironmentVariable[];
  /**
   * The name of the image used for the container.
   */
  Image?: string;
  /**
   * The open firewall ports of the container.
   */
  Ports?: PortInfo[];
};
/**
 * Type definition for `AWS::Lightsail::Container.ContainerServiceDeployment`.
 * Describes a container deployment configuration of an Amazon Lightsail container service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-containerservicedeployment.html}
 */
export type ContainerServiceDeployment = {
  /**
   * An object that describes the configuration for the containers of the deployment.
   */
  Containers?: Container[];
  /**
   * An object that describes the endpoint of the deployment.
   */
  PublicEndpoint?: PublicEndpoint;
};
/**
 * Type definition for `AWS::Lightsail::Container.EnvironmentVariable`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-environmentvariable.html}
 */
export type EnvironmentVariable = {
  Value?: string;
  Variable?: string;
};
/**
 * Type definition for `AWS::Lightsail::Container.HealthCheckConfig`.
 * Describes the health check configuration of an Amazon Lightsail container service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-healthcheckconfig.html}
 */
export type HealthCheckConfig = {
  /**
   * The number of consecutive health checks successes required before moving the container to the Healthy state. The default value is 2.
   */
  HealthyThreshold?: number;
  /**
   * The approximate interval, in seconds, between health checks of an individual container. You can specify between 5 and 300 seconds. The default value is 5.
   */
  IntervalSeconds?: number;
  /**
   * The path on the container on which to perform the health check. The default value is /.
   */
  Path?: string;
  /**
   * The HTTP codes to use when checking for a successful response from a container. You can specify values between 200 and 499. You can specify multiple values (for example, 200,202) or a range of values (for example, 200-299).
   */
  SuccessCodes?: string;
  /**
   * The amount of time, in seconds, during which no response means a failed health check. You can specify between 2 and 60 seconds. The default value is 2.
   */
  TimeoutSeconds?: number;
  /**
   * The number of consecutive health check failures required before moving the container to the Unhealthy state. The default value is 2.
   */
  UnhealthyThreshold?: number;
};
/**
 * Type definition for `AWS::Lightsail::Container.PortInfo`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-portinfo.html}
 */
export type PortInfo = {
  Port?: string;
  Protocol?: string;
};
/**
 * Type definition for `AWS::Lightsail::Container.PrivateRegistryAccess`.
 * An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-privateregistryaccess.html}
 */
export type PrivateRegistryAccess = {
  /**
   * An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.
   */
  EcrImagePullerRole?: {
    /**
     * A Boolean value that indicates whether to activate the role.
     */
    IsActive?: boolean;
    /**
     * The Amazon Resource Name (ARN) of the role, if it is activated.
     */
    PrincipalArn?: string;
  };
};
/**
 * Type definition for `AWS::Lightsail::Container.PublicDomainName`.
 * The public domain name to use with the container service, such as example.com and www.example.com.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicdomainname.html}
 */
export type PublicDomainName = {
  CertificateName?: string;
  /**
   * An object that describes the configuration for the containers of the deployment.
   */
  DomainNames?: string[];
};
/**
 * Type definition for `AWS::Lightsail::Container.PublicEndpoint`.
 * Describes the settings of a public endpoint for an Amazon Lightsail container service.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-publicendpoint.html}
 */
export type PublicEndpoint = {
  /**
   * The name of the container for the endpoint.
   */
  ContainerName?: string;
  /**
   * The port of the container to which traffic is forwarded to.
   */
  ContainerPort?: number;
  /**
   * An object that describes the health check configuration of the container.
   */
  HealthCheckConfig?: HealthCheckConfig;
};
/**
 * Type definition for `AWS::Lightsail::Container.Tag`.
 * A key-value pair to associate with a resource.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-container-tag.html}
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
   * @maxLength `256`
   */
  Value?: string;
};
/**
 * Resource Type definition for AWS::Lightsail::Container
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-container.html}
 */
export class LightsailContainer extends $Resource<
  "AWS::Lightsail::Container",
  LightsailContainerProperties,
  LightsailContainerAttributes
> {
  public static readonly Type = "AWS::Lightsail::Container";
  public static readonly AttributeNames = [
    "ContainerArn" as const,
    "PrincipalArn" as const,
    "Url" as const,
  ];
  constructor(
    logicalId: string,
    properties: LightsailContainerProperties,
    options?: $ResourceOptions,
  ) {
    super(
      logicalId,
      LightsailContainer.Type,
      properties,
      LightsailContainer.AttributeNames,
      options,
    );
  }
}
