resource "aws_instance" "srv1" {
  ami = "ami-8ee056f3"
  instance_type = "t2.micro"
  key_name = "aws-ssh-key"
  tags {
    Name = "srv1"
  }
  security_groups = ["${aws_security_group.sg_serveurs.name}"]
  user_data = "${file("postinstall.yml")}"
}

resource "aws_volume_attachment" "ebs_att" {
  device_name = "/dev/xvdb"
  volume_id   = "${aws_ebs_volume.www_srv1.id}"
  instance_id = "${aws_instance.srv1.id}"
}

resource "aws_ebs_volume" "www_srv1" {
  availability_zone = "${aws_instance.srv1.availability_zone}"
  size              = 10
}

resource "aws_security_group" "sg_serveurs" {
  name = "sg_serveurs"
  description = "Permettre le SSH depuis mon IP"

  ingress {
    from_port = 22
    to_port   = 22
    protocol  = "tcp"
    cidr_blocks = ["1.2.3.4/32"]
  }

  egress {
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}