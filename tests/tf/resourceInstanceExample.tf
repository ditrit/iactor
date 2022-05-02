resource "aws_instance" "www-a" {
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
  subnet_id              = "${aws_subnet.webservers-a.id}"
  associate_public_ip_address = "true"
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

resource "aws_security_group" "sg_www" {
  name = "sg_www"
  vpc_id = "${aws_vpc.vpc_main.id}"

  ingress {
    from_port = "${var.http_port}"
    to_port   = "${var.http_port}"
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port = "${var.ssh_port}"
    to_port   = "${var.ssh_port}"
    protocol  = "tcp"
    cidr_blocks = ["1.2.3.4/32"]
  }

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "icmp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}