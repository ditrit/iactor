terraform {
  required_version = ">= 1.0.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 1.0.4"
    }
  }

  backend "remote" {
    organization = "example_corp"

    workspaces {
      name = "my-app-prod"
    }
  }

  cloud {
    organization = "my-org"
    workspaces {
      tags = ["networking"]
    }
  }
}

variable "base_cidr_block" {
  description = "A /16 CIDR range definition, such as 10.1.0.0/16, that the VPC will use"
  default = "10.1.0.0/16"

  validation {
    condition = length(var.image_id) > 4 && substr(var.image_id, 0, 4) == "ami-"
    error_message = "The image_id value must be a valid AMI id, starting with \"ami-\"."
  }
  nullable = false 
}

variable "availability_zones" {
  description = "A list of availability zones in which to create subnets"
  type = list(string)
  sensitive = true
}

provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "main" {
  # Referencing the base_cidr_block variable allows the network address
  # to be changed without modifying the configuration.
  cidr_block = var.base_cidr_block
  az = var.availability_zones
}


resource "aws_instance" "www-b" {
  ami = "ami-8ee056f3"
  instance_type = "t2.micro"
  key_name = "aws-ssh-key"
  vpc_security_group_ids = ["${aws_security_group.sg_www.id}"]
  user_data = <<EOF
#!/bin/bash
yum -y update
yum -y install httpd
chkconfig httpd on
service httpd start
EOF
  subnet_id              = "${aws_subnet.webservers-b.id}"
  associate_public_ip_address = "true"
}


output "instance_ip_addr" {
  value = aws_instance.server.private_ip

  depends_on = [
    aws_security_group_rule.local_access,
  ]
}

module "servers" {
  source = "./app-cluster"
  servers = 5
}