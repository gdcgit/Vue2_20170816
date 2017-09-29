/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : vue

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-08-16 13:55:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '商品名字',
  `price` int(5) DEFAULT NULL COMMENT '商品价格',
  `img` varchar(255) DEFAULT NULL COMMENT '商品图片',
  `count` varchar(10) DEFAULT NULL COMMENT '商品描述',
  `amount` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '花生', '12', '/vue/public/static/img/goods-1.jpg', '1', '12');
INSERT INTO `goods` VALUES ('2', '啤酒', '6', '/vue/public/static/img/goods-2.jpg', '1', '6');
