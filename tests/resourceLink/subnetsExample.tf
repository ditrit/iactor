resource "aws_vpc" "vpc_main" {
  cidr_block = "172.16.0.0/16"
  enable_dns_support = true
  enable_dns_hostnames = true
}

resource "aws_subnet" "webservers-a" {
  vpc_id                  = "${aws_vpc.vpc_main.id}"
  cidr_block              = "172.16.10.0/24"
  map_public_ip_on_launch = true
  availability_zone = "eu-west-3a"
}