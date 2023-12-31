import { Resource as $Resource } from "@awboost/cfn-template-builder/template/Resource";
import type { ResourceOptions as $ResourceOptions } from "@awboost/cfn-template-builder/template";
/**
 * Resource schema for AWS::EC2::NetworkInsightsAnalysis
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html}
 */
export type EC2NetworkInsightsAnalysisProperties = {
  AdditionalAccounts?: string[];
  FilterInArns?: string[];
  NetworkInsightsPathId: string;
  Tags?: Tag[];
};
/**
 * Attribute type definition for `AWS::EC2::NetworkInsightsAnalysis`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html#aws-resource-ec2-networkinsightsanalysis-return-values}
 */
export type EC2NetworkInsightsAnalysisAttributes = {
  AlternatePathHints: {
    ComponentArn: string;
    ComponentId: string;
  }[];
  Explanations: {
    Acl: {
      Arn: string;
      Id: string;
    };
    AclRule: {
      Cidr: string;
      Egress: boolean;
      PortRange: {
        From: number;
        To: number;
      };
      Protocol: string;
      RuleAction: string;
      RuleNumber: number;
    };
    Address: string;
    Addresses: string[];
    AttachedTo: {
      Arn: string;
      Id: string;
    };
    AvailabilityZones: string[];
    Cidrs: string[];
    ClassicLoadBalancerListener: {
      InstancePort: number;
      LoadBalancerPort: number;
    };
    Component: {
      Arn: string;
      Id: string;
    };
    ComponentAccount: string;
    ComponentRegion: string;
    CustomerGateway: {
      Arn: string;
      Id: string;
    };
    Destination: {
      Arn: string;
      Id: string;
    };
    DestinationVpc: {
      Arn: string;
      Id: string;
    };
    Direction: string;
    ElasticLoadBalancerListener: {
      Arn: string;
      Id: string;
    };
    ExplanationCode: string;
    IngressRouteTable: {
      Arn: string;
      Id: string;
    };
    InternetGateway: {
      Arn: string;
      Id: string;
    };
    LoadBalancerArn: string;
    LoadBalancerListenerPort: number;
    LoadBalancerTarget: {
      Address: string;
      AvailabilityZone: string;
      Instance: {
        Arn: string;
        Id: string;
      };
      Port: number;
    };
    LoadBalancerTargetGroup: {
      Arn: string;
      Id: string;
    };
    LoadBalancerTargetGroups: {
      Arn: string;
      Id: string;
    }[];
    LoadBalancerTargetPort: number;
    MissingComponent: string;
    NatGateway: {
      Arn: string;
      Id: string;
    };
    NetworkInterface: {
      Arn: string;
      Id: string;
    };
    PacketField: string;
    Port: number;
    PortRanges: {
      From: number;
      To: number;
    }[];
    PrefixList: {
      Arn: string;
      Id: string;
    };
    Protocols: string[];
    RouteTable: {
      Arn: string;
      Id: string;
    };
    RouteTableRoute: {
      NatGatewayId: string;
      NetworkInterfaceId: string;
      Origin: string;
      State: string;
      TransitGatewayId: string;
      VpcPeeringConnectionId: string;
      destinationCidr: string;
      destinationPrefixListId: string;
      egressOnlyInternetGatewayId: string;
      gatewayId: string;
      instanceId: string;
    };
    SecurityGroup: {
      Arn: string;
      Id: string;
    };
    SecurityGroupRule: {
      Cidr: string;
      Direction: string;
      PortRange: {
        From: number;
        To: number;
      };
      PrefixListId: string;
      Protocol: string;
      SecurityGroupId: string;
    };
    SecurityGroups: {
      Arn: string;
      Id: string;
    }[];
    SourceVpc: {
      Arn: string;
      Id: string;
    };
    State: string;
    Subnet: {
      Arn: string;
      Id: string;
    };
    SubnetRouteTable: {
      Arn: string;
      Id: string;
    };
    TransitGateway: {
      Arn: string;
      Id: string;
    };
    TransitGatewayAttachment: {
      Arn: string;
      Id: string;
    };
    TransitGatewayRouteTable: {
      Arn: string;
      Id: string;
    };
    TransitGatewayRouteTableRoute: {
      AttachmentId: string;
      DestinationCidr: string;
      PrefixListId: string;
      ResourceId: string;
      ResourceType: string;
      RouteOrigin: string;
      State: string;
    };
    Vpc: {
      Arn: string;
      Id: string;
    };
    VpcPeeringConnection: {
      Arn: string;
      Id: string;
    };
    VpnConnection: {
      Arn: string;
      Id: string;
    };
    VpnGateway: {
      Arn: string;
      Id: string;
    };
    vpcEndpoint: {
      Arn: string;
      Id: string;
    };
  }[];
  ForwardPathComponents: {
    AclRule: {
      Cidr: string;
      Egress: boolean;
      PortRange: {
        From: number;
        To: number;
      };
      Protocol: string;
      RuleAction: string;
      RuleNumber: number;
    };
    AdditionalDetails: {
      AdditionalDetailType: string;
      Component: {
        Arn: string;
        Id: string;
      };
      LoadBalancers: {
        Arn: string;
        Id: string;
      }[];
      ServiceName: string;
    }[];
    Component: {
      Arn: string;
      Id: string;
    };
    DestinationVpc: {
      Arn: string;
      Id: string;
    };
    ElasticLoadBalancerListener: {
      Arn: string;
      Id: string;
    };
    Explanations: {
      Acl: {
        Arn: string;
        Id: string;
      };
      AclRule: {
        Cidr: string;
        Egress: boolean;
        PortRange: {
          From: number;
          To: number;
        };
        Protocol: string;
        RuleAction: string;
        RuleNumber: number;
      };
      Address: string;
      Addresses: string[];
      AttachedTo: {
        Arn: string;
        Id: string;
      };
      AvailabilityZones: string[];
      Cidrs: string[];
      ClassicLoadBalancerListener: {
        InstancePort: number;
        LoadBalancerPort: number;
      };
      Component: {
        Arn: string;
        Id: string;
      };
      ComponentAccount: string;
      ComponentRegion: string;
      CustomerGateway: {
        Arn: string;
        Id: string;
      };
      Destination: {
        Arn: string;
        Id: string;
      };
      DestinationVpc: {
        Arn: string;
        Id: string;
      };
      Direction: string;
      ElasticLoadBalancerListener: {
        Arn: string;
        Id: string;
      };
      ExplanationCode: string;
      IngressRouteTable: {
        Arn: string;
        Id: string;
      };
      InternetGateway: {
        Arn: string;
        Id: string;
      };
      LoadBalancerArn: string;
      LoadBalancerListenerPort: number;
      LoadBalancerTarget: {
        Address: string;
        AvailabilityZone: string;
        Instance: {
          Arn: string;
          Id: string;
        };
        Port: number;
      };
      LoadBalancerTargetGroup: {
        Arn: string;
        Id: string;
      };
      LoadBalancerTargetGroups: {
        Arn: string;
        Id: string;
      }[];
      LoadBalancerTargetPort: number;
      MissingComponent: string;
      NatGateway: {
        Arn: string;
        Id: string;
      };
      NetworkInterface: {
        Arn: string;
        Id: string;
      };
      PacketField: string;
      Port: number;
      PortRanges: {
        From: number;
        To: number;
      }[];
      PrefixList: {
        Arn: string;
        Id: string;
      };
      Protocols: string[];
      RouteTable: {
        Arn: string;
        Id: string;
      };
      RouteTableRoute: {
        NatGatewayId: string;
        NetworkInterfaceId: string;
        Origin: string;
        State: string;
        TransitGatewayId: string;
        VpcPeeringConnectionId: string;
        destinationCidr: string;
        destinationPrefixListId: string;
        egressOnlyInternetGatewayId: string;
        gatewayId: string;
        instanceId: string;
      };
      SecurityGroup: {
        Arn: string;
        Id: string;
      };
      SecurityGroupRule: {
        Cidr: string;
        Direction: string;
        PortRange: {
          From: number;
          To: number;
        };
        PrefixListId: string;
        Protocol: string;
        SecurityGroupId: string;
      };
      SecurityGroups: {
        Arn: string;
        Id: string;
      }[];
      SourceVpc: {
        Arn: string;
        Id: string;
      };
      State: string;
      Subnet: {
        Arn: string;
        Id: string;
      };
      SubnetRouteTable: {
        Arn: string;
        Id: string;
      };
      TransitGateway: {
        Arn: string;
        Id: string;
      };
      TransitGatewayAttachment: {
        Arn: string;
        Id: string;
      };
      TransitGatewayRouteTable: {
        Arn: string;
        Id: string;
      };
      TransitGatewayRouteTableRoute: {
        AttachmentId: string;
        DestinationCidr: string;
        PrefixListId: string;
        ResourceId: string;
        ResourceType: string;
        RouteOrigin: string;
        State: string;
      };
      Vpc: {
        Arn: string;
        Id: string;
      };
      VpcPeeringConnection: {
        Arn: string;
        Id: string;
      };
      VpnConnection: {
        Arn: string;
        Id: string;
      };
      VpnGateway: {
        Arn: string;
        Id: string;
      };
      vpcEndpoint: {
        Arn: string;
        Id: string;
      };
    }[];
    InboundHeader: {
      DestinationAddresses: string[];
      DestinationPortRanges: {
        From: number;
        To: number;
      }[];
      Protocol: string;
      SourceAddresses: string[];
      SourcePortRanges: {
        From: number;
        To: number;
      }[];
    };
    OutboundHeader: {
      DestinationAddresses: string[];
      DestinationPortRanges: {
        From: number;
        To: number;
      }[];
      Protocol: string;
      SourceAddresses: string[];
      SourcePortRanges: {
        From: number;
        To: number;
      }[];
    };
    RouteTableRoute: {
      NatGatewayId: string;
      NetworkInterfaceId: string;
      Origin: string;
      State: string;
      TransitGatewayId: string;
      VpcPeeringConnectionId: string;
      destinationCidr: string;
      destinationPrefixListId: string;
      egressOnlyInternetGatewayId: string;
      gatewayId: string;
      instanceId: string;
    };
    SecurityGroupRule: {
      Cidr: string;
      Direction: string;
      PortRange: {
        From: number;
        To: number;
      };
      PrefixListId: string;
      Protocol: string;
      SecurityGroupId: string;
    };
    SequenceNumber: number;
    ServiceName: string;
    SourceVpc: {
      Arn: string;
      Id: string;
    };
    Subnet: {
      Arn: string;
      Id: string;
    };
    TransitGateway: {
      Arn: string;
      Id: string;
    };
    TransitGatewayRouteTableRoute: {
      AttachmentId: string;
      DestinationCidr: string;
      PrefixListId: string;
      ResourceId: string;
      ResourceType: string;
      RouteOrigin: string;
      State: string;
    };
    Vpc: {
      Arn: string;
      Id: string;
    };
  }[];
  NetworkInsightsAnalysisArn: string;
  NetworkInsightsAnalysisId: string;
  NetworkPathFound: boolean;
  ReturnPathComponents: {
    AclRule: {
      Cidr: string;
      Egress: boolean;
      PortRange: {
        From: number;
        To: number;
      };
      Protocol: string;
      RuleAction: string;
      RuleNumber: number;
    };
    AdditionalDetails: {
      AdditionalDetailType: string;
      Component: {
        Arn: string;
        Id: string;
      };
      LoadBalancers: {
        Arn: string;
        Id: string;
      }[];
      ServiceName: string;
    }[];
    Component: {
      Arn: string;
      Id: string;
    };
    DestinationVpc: {
      Arn: string;
      Id: string;
    };
    ElasticLoadBalancerListener: {
      Arn: string;
      Id: string;
    };
    Explanations: {
      Acl: {
        Arn: string;
        Id: string;
      };
      AclRule: {
        Cidr: string;
        Egress: boolean;
        PortRange: {
          From: number;
          To: number;
        };
        Protocol: string;
        RuleAction: string;
        RuleNumber: number;
      };
      Address: string;
      Addresses: string[];
      AttachedTo: {
        Arn: string;
        Id: string;
      };
      AvailabilityZones: string[];
      Cidrs: string[];
      ClassicLoadBalancerListener: {
        InstancePort: number;
        LoadBalancerPort: number;
      };
      Component: {
        Arn: string;
        Id: string;
      };
      ComponentAccount: string;
      ComponentRegion: string;
      CustomerGateway: {
        Arn: string;
        Id: string;
      };
      Destination: {
        Arn: string;
        Id: string;
      };
      DestinationVpc: {
        Arn: string;
        Id: string;
      };
      Direction: string;
      ElasticLoadBalancerListener: {
        Arn: string;
        Id: string;
      };
      ExplanationCode: string;
      IngressRouteTable: {
        Arn: string;
        Id: string;
      };
      InternetGateway: {
        Arn: string;
        Id: string;
      };
      LoadBalancerArn: string;
      LoadBalancerListenerPort: number;
      LoadBalancerTarget: {
        Address: string;
        AvailabilityZone: string;
        Instance: {
          Arn: string;
          Id: string;
        };
        Port: number;
      };
      LoadBalancerTargetGroup: {
        Arn: string;
        Id: string;
      };
      LoadBalancerTargetGroups: {
        Arn: string;
        Id: string;
      }[];
      LoadBalancerTargetPort: number;
      MissingComponent: string;
      NatGateway: {
        Arn: string;
        Id: string;
      };
      NetworkInterface: {
        Arn: string;
        Id: string;
      };
      PacketField: string;
      Port: number;
      PortRanges: {
        From: number;
        To: number;
      }[];
      PrefixList: {
        Arn: string;
        Id: string;
      };
      Protocols: string[];
      RouteTable: {
        Arn: string;
        Id: string;
      };
      RouteTableRoute: {
        NatGatewayId: string;
        NetworkInterfaceId: string;
        Origin: string;
        State: string;
        TransitGatewayId: string;
        VpcPeeringConnectionId: string;
        destinationCidr: string;
        destinationPrefixListId: string;
        egressOnlyInternetGatewayId: string;
        gatewayId: string;
        instanceId: string;
      };
      SecurityGroup: {
        Arn: string;
        Id: string;
      };
      SecurityGroupRule: {
        Cidr: string;
        Direction: string;
        PortRange: {
          From: number;
          To: number;
        };
        PrefixListId: string;
        Protocol: string;
        SecurityGroupId: string;
      };
      SecurityGroups: {
        Arn: string;
        Id: string;
      }[];
      SourceVpc: {
        Arn: string;
        Id: string;
      };
      State: string;
      Subnet: {
        Arn: string;
        Id: string;
      };
      SubnetRouteTable: {
        Arn: string;
        Id: string;
      };
      TransitGateway: {
        Arn: string;
        Id: string;
      };
      TransitGatewayAttachment: {
        Arn: string;
        Id: string;
      };
      TransitGatewayRouteTable: {
        Arn: string;
        Id: string;
      };
      TransitGatewayRouteTableRoute: {
        AttachmentId: string;
        DestinationCidr: string;
        PrefixListId: string;
        ResourceId: string;
        ResourceType: string;
        RouteOrigin: string;
        State: string;
      };
      Vpc: {
        Arn: string;
        Id: string;
      };
      VpcPeeringConnection: {
        Arn: string;
        Id: string;
      };
      VpnConnection: {
        Arn: string;
        Id: string;
      };
      VpnGateway: {
        Arn: string;
        Id: string;
      };
      vpcEndpoint: {
        Arn: string;
        Id: string;
      };
    }[];
    InboundHeader: {
      DestinationAddresses: string[];
      DestinationPortRanges: {
        From: number;
        To: number;
      }[];
      Protocol: string;
      SourceAddresses: string[];
      SourcePortRanges: {
        From: number;
        To: number;
      }[];
    };
    OutboundHeader: {
      DestinationAddresses: string[];
      DestinationPortRanges: {
        From: number;
        To: number;
      }[];
      Protocol: string;
      SourceAddresses: string[];
      SourcePortRanges: {
        From: number;
        To: number;
      }[];
    };
    RouteTableRoute: {
      NatGatewayId: string;
      NetworkInterfaceId: string;
      Origin: string;
      State: string;
      TransitGatewayId: string;
      VpcPeeringConnectionId: string;
      destinationCidr: string;
      destinationPrefixListId: string;
      egressOnlyInternetGatewayId: string;
      gatewayId: string;
      instanceId: string;
    };
    SecurityGroupRule: {
      Cidr: string;
      Direction: string;
      PortRange: {
        From: number;
        To: number;
      };
      PrefixListId: string;
      Protocol: string;
      SecurityGroupId: string;
    };
    SequenceNumber: number;
    ServiceName: string;
    SourceVpc: {
      Arn: string;
      Id: string;
    };
    Subnet: {
      Arn: string;
      Id: string;
    };
    TransitGateway: {
      Arn: string;
      Id: string;
    };
    TransitGatewayRouteTableRoute: {
      AttachmentId: string;
      DestinationCidr: string;
      PrefixListId: string;
      ResourceId: string;
      ResourceType: string;
      RouteOrigin: string;
      State: string;
    };
    Vpc: {
      Arn: string;
      Id: string;
    };
  }[];
  StartDate: string;
  Status: "running" | "failed" | "succeeded";
  StatusMessage: string;
  SuggestedAccounts: string[];
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AdditionalDetail`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-additionaldetail.html}
 */
export type AdditionalDetail = {
  AdditionalDetailType?: string;
  Component?: AnalysisComponent;
  LoadBalancers?: AnalysisComponent[];
  ServiceName?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AlternatePathHint`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-alternatepathhint.html}
 */
export type AlternatePathHint = {
  ComponentArn?: string;
  ComponentId?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisAclRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisaclrule.html}
 */
export type AnalysisAclRule = {
  Cidr?: string;
  Egress?: boolean;
  PortRange?: PortRange;
  Protocol?: string;
  RuleAction?: string;
  RuleNumber?: number;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisComponent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysiscomponent.html}
 */
export type AnalysisComponent = {
  Arn?: string;
  Id?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisLoadBalancerListener`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisloadbalancerlistener.html}
 */
export type AnalysisLoadBalancerListener = {
  InstancePort?: number;
  LoadBalancerPort?: number;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisLoadBalancerTarget`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisloadbalancertarget.html}
 */
export type AnalysisLoadBalancerTarget = {
  Address?: string;
  AvailabilityZone?: string;
  Instance?: AnalysisComponent;
  Port?: number;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisPacketHeader`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysispacketheader.html}
 */
export type AnalysisPacketHeader = {
  DestinationAddresses?: string[];
  DestinationPortRanges?: PortRange[];
  Protocol?: string;
  SourceAddresses?: string[];
  SourcePortRanges?: PortRange[];
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisRouteTableRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute.html}
 */
export type AnalysisRouteTableRoute = {
  NatGatewayId?: string;
  NetworkInterfaceId?: string;
  Origin?: string;
  State?: string;
  TransitGatewayId?: string;
  VpcPeeringConnectionId?: string;
  destinationCidr?: string;
  destinationPrefixListId?: string;
  egressOnlyInternetGatewayId?: string;
  gatewayId?: string;
  instanceId?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.AnalysisSecurityGroupRule`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysissecuritygrouprule.html}
 */
export type AnalysisSecurityGroupRule = {
  Cidr?: string;
  Direction?: string;
  PortRange?: PortRange;
  PrefixListId?: string;
  Protocol?: string;
  SecurityGroupId?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.Explanation`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-explanation.html}
 */
export type Explanation = {
  Acl?: AnalysisComponent;
  AclRule?: AnalysisAclRule;
  Address?: string;
  Addresses?: string[];
  AttachedTo?: AnalysisComponent;
  AvailabilityZones?: string[];
  Cidrs?: string[];
  ClassicLoadBalancerListener?: AnalysisLoadBalancerListener;
  Component?: AnalysisComponent;
  ComponentAccount?: string;
  ComponentRegion?: string;
  CustomerGateway?: AnalysisComponent;
  Destination?: AnalysisComponent;
  DestinationVpc?: AnalysisComponent;
  Direction?: string;
  ElasticLoadBalancerListener?: AnalysisComponent;
  ExplanationCode?: string;
  IngressRouteTable?: AnalysisComponent;
  InternetGateway?: AnalysisComponent;
  LoadBalancerArn?: string;
  LoadBalancerListenerPort?: number;
  LoadBalancerTarget?: AnalysisLoadBalancerTarget;
  LoadBalancerTargetGroup?: AnalysisComponent;
  LoadBalancerTargetGroups?: AnalysisComponent[];
  LoadBalancerTargetPort?: number;
  MissingComponent?: string;
  NatGateway?: AnalysisComponent;
  NetworkInterface?: AnalysisComponent;
  PacketField?: string;
  Port?: number;
  PortRanges?: PortRange[];
  PrefixList?: AnalysisComponent;
  Protocols?: string[];
  RouteTable?: AnalysisComponent;
  RouteTableRoute?: AnalysisRouteTableRoute;
  SecurityGroup?: AnalysisComponent;
  SecurityGroupRule?: AnalysisSecurityGroupRule;
  SecurityGroups?: AnalysisComponent[];
  SourceVpc?: AnalysisComponent;
  State?: string;
  Subnet?: AnalysisComponent;
  SubnetRouteTable?: AnalysisComponent;
  TransitGateway?: AnalysisComponent;
  TransitGatewayAttachment?: AnalysisComponent;
  TransitGatewayRouteTable?: AnalysisComponent;
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;
  Vpc?: AnalysisComponent;
  VpcPeeringConnection?: AnalysisComponent;
  VpnConnection?: AnalysisComponent;
  VpnGateway?: AnalysisComponent;
  vpcEndpoint?: AnalysisComponent;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.PathComponent`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-pathcomponent.html}
 */
export type PathComponent = {
  AclRule?: AnalysisAclRule;
  AdditionalDetails?: AdditionalDetail[];
  Component?: AnalysisComponent;
  DestinationVpc?: AnalysisComponent;
  ElasticLoadBalancerListener?: AnalysisComponent;
  Explanations?: Explanation[];
  InboundHeader?: AnalysisPacketHeader;
  OutboundHeader?: AnalysisPacketHeader;
  RouteTableRoute?: AnalysisRouteTableRoute;
  SecurityGroupRule?: AnalysisSecurityGroupRule;
  SequenceNumber?: number;
  ServiceName?: string;
  SourceVpc?: AnalysisComponent;
  Subnet?: AnalysisComponent;
  TransitGateway?: AnalysisComponent;
  TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute;
  Vpc?: AnalysisComponent;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.PortRange`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-portrange.html}
 */
export type PortRange = {
  From?: number;
  To?: number;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.Tag`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-tag.html}
 */
export type Tag = {
  Key: string;
  Value?: string;
};
/**
 * Type definition for `AWS::EC2::NetworkInsightsAnalysis.TransitGatewayRouteTableRoute`.
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-transitgatewayroutetableroute.html}
 */
export type TransitGatewayRouteTableRoute = {
  AttachmentId?: string;
  DestinationCidr?: string;
  PrefixListId?: string;
  ResourceId?: string;
  ResourceType?: string;
  RouteOrigin?: string;
  State?: string;
};
/**
 * Resource schema for AWS::EC2::NetworkInsightsAnalysis
 * @see {@link https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html}
 */
export class EC2NetworkInsightsAnalysis extends $Resource<
  "AWS::EC2::NetworkInsightsAnalysis",
  EC2NetworkInsightsAnalysisProperties,
  EC2NetworkInsightsAnalysisAttributes
> {
  public static readonly Type = "AWS::EC2::NetworkInsightsAnalysis";
  constructor(
    logicalId: string,
    properties: EC2NetworkInsightsAnalysisProperties,
    options?: $ResourceOptions,
  ) {
    super(logicalId, EC2NetworkInsightsAnalysis.Type, properties, options);
  }
}
