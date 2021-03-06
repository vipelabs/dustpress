<?php
namespace DustPress;

class Strtodate extends Helper {
    public function output() {
		$value 	= $this->params->value;
		$format	= $this->params->format;
		$now	= $this->params->now;
		
		return date( $format, strtotime( $value, $now ) );
    }
}

$this->add_helper( 'strtodate', new Strtodate() );