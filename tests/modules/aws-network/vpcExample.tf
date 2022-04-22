resource "aws_vpc" "vpc_main" {
  cidr_block = "172.16.0.0/16"
  enable_dns_support = true
  enable_dns_hostnames = true
}

resource "aws_internet_gateway" "default" {
  vpc_id = "${aws_vpc.vpc_main.id}"
}

resource "aws_route" "wan_access" {
  route_table_id          = "${aws_vpc.vpc_main.main_route_table_id}"
  destination_cidr_block  = "0.0.0.0/0"
  gateway_id              = "${aws_internet_gateway.default.id}"
}