output "elb_dns_name" {
  value = "${aws_elb.http-lb.dns_name}"
}