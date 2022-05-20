resource "aws_security_group" "sg_elb" {
  name = "sg_elb"

  ingress {
    from_port = "${var.http_port}"
    to_port   = "${var.http_port}"
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_elb" "http-lb" {
  name = "http-lb"

  listener {
    lb_port = "${var.http_port}"
    lb_protocol = "http"
    instance_port = "${var.ssh_port}"
    instance_protocol = "ssh"
  }
}