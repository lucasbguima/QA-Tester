<?php
use PHPUnit\Framework\TestCase;

class StackTest extends TestCase
{
    public function testPushAndPop()
    {
        $stack = [];
        $this->assertEquals(0, count($stack));
        array_push($stack, 'foo');
        array_push($stack, 'abe');
        $this->assertEquals(2, count($stack));
        $this->assertEquals('abe', array_pop($stack));
        $this->assertEquals(1, count($stack));
        $this->assertEquals('foo', array_pop($stack));
        $this->assertEquals(0, count($stack));
    }
}
?>
