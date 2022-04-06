resource "aws_subnet" "webservers-a" {
  vpc_id                  = "${aws_vpc.vpc_main.id}"
  cidr_block              = "172.16.10.0/24"
  map_public_ip_on_launch = true
  availability_zone = "eu-west-3a"
}

resource "aws_subnet" "webservers-b" {
  vpc_id                  = "${aws_vpc.vpc_main.id}"
  cidr_block              = "172.16.20.0/24"
  map_public_ip_on_launch = true
  availability_zone = "eu-west-3b"
}