insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'role','系统管理员','1','1' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'role','销售主管','2','1' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'role','客户经理','3','1' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'role','高管','4','1' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'chancestatus','未分配','1','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'chancestatus','开发中','2','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'chancestatus','开发成功','3','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'customerstatus','已归档','4','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'isassign','未指派','2','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'isassign','指派','1','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'district','北京','1','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'district','华北','2','0' );      
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'district','中南','3','0' );   
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'district','西部','4','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'district','东北','5','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'grade','战略合作伙伴','1','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'grade','合作伙伴','2','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'grade','大客户','3','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'grade','重点开发客户','4','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'grade','普通客户','5','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'customerstatus','客户','1','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'customerstatus','预警','2','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'customerstatus','暂缓流失','3','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'customerstatus','确认流失','4','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'customerstatus','归档','5','0' ); 
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'sex','男','1','0' ); 
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'sex','女','2','0' ); 
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'post','总经理','1','0' ); 
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'post','总经理助理','2','0' ); 
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'post','供销部经理','3','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'orderstatus','未回款','1','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'orderstatus','已回款','2','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'servicetype','咨询','1','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'servicetype','投诉','2','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'servicetype','建议','3','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'servicestatus','新创建','1','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'servicestatus','已分配','2','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'servicestatus','已处理','3','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'servicestatus','已反馈','4','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'servicestatus','已归档','5','0' );
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'satisfaction','一星','1','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'satisfaction','二星','2','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'satisfaction','三星','3','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'satisfaction','四星','4','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'satisfaction','五星','5','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'credit','一星','1','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'credit','二星','2','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'credit','三星','3','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'credit','四星','4','0' );  
insert into datadirectorys( dtype,tiaomu,dvalue,isedit  ) values( 'credit','五星','5','0' );  

select * from datadirectorys where id=26;



insert into userinfo( uname,pwd,name,sex,userage,role,isassign )
 values( 'a','a','战三',26,2,1,'9' );
insert into userinfo( uname,pwd,name,sex,userage,role,isassign )
 values( 'b','b','李四',26,2,2,'9' );
 insert into userinfo( uname,pwd,name,sex,userage,role,isassign )
 values( 'c','c','王五',26,2,3,'9' );
 insert into userinfo( uname,pwd,name,sex,userage,role,isassign )
 values( 'd','d','小二',26,2,4,'9' );
 
 select * from userinfo;



insert into customer( cname,district,grade,satisfaction,credit,
location,postcode,registermoney,yearincome,telphone,fax,website,license,legal,bank,
bankaccount,rentnumber,taxnumber,customerstatus,customermanagerid
)
 values( 'yc公司',11,18,45,50,'北京市海淀区成府路702号',
152632,10000,1000000,'100','010-62283396','www.conghai.com',' ','张飞','xxxx银行','1546513215645',' ',' ',21,1 
);
insert into customer( cname,district,grade,satisfaction,credit,
location,postcode,registermoney,yearincome,telphone,fax,website,license,legal,bank,
bankaccount,rentnumber,taxnumber,customerstatus,customermanagerid
)
 values( '聪海信息科技有限公司',11,18,45,50,'北京市海淀区成府路702号',
152632,10000,1000000,'100','010-62283396','www.conghai.com',' ','张飞','xxxx银行','1546513215645',' ',' ',21,1 
);
insert into customer( cname,district,grade,satisfaction,credit,
location,postcode,registermoney,yearincome,telphone,fax,website,license,legal,bank,
bankaccount,rentnumber,taxnumber,customerstatus,customermanagerid
)
 values( '要走有限公司',11,18,45,50,'北京市海淀区成府路702号',
152632,10000,1000000,'100','010-62283396','www.conghai.com',' ','张飞','xxxx银行','1546513215645',' ',' ',21,1 
);
insert into customer( cname,district,grade,satisfaction,credit,
location,postcode,registermoney,yearincome,telphone,fax,website,license,legal,bank,
bankaccount,rentnumber,taxnumber,customerstatus,customermanagerid
)
 values( '要走信息科技有限公司',11,18,45,50,'北京市海淀区成府路702号',
152632,10000,1000000,'100','010-62283396','www.conghai.com',' ','张飞','xxxx银行','1546513215645',' ',' ',21,1 
);
insert into customer( cname,district,grade,satisfaction,credit,
location,postcode,registermoney,yearincome,telphone,fax,website,license,legal,bank,
bankaccount,rentnumber,taxnumber,customerstatus,customermanagerid
)
 values( '流失信息科技有限公司',11,18,45,50,'北京市海淀区成府路702号',
152632,10000,1000000,'100','010-62283396','www.conghai.com',' ','张飞','xxxx银行','1546513215645',' ',' ',21,1 
);

select * from customer;



insert into contacter(customerid,cname,sex,post,telphone,cellphone,remark) values(1,'杨影',26,28,'010-68348438-326','13728838283',' ');
insert into contacter(customerid,cname,sex,post,telphone,cellphone,remark) values(2,'王琪',26,28,'010-68348438-326','13728838283',' ');
select * from contacter;



insert into contacthistory( contacterid,contacttime,place,summary,item,remark ) values(1,now(),'大酒店',' ',' ',' ');
select * from contacthistory;


insert into orderinfo( customerid,customername,ordertime,sendlocation,orderstatus ) values( 1,'yc公司','2011-01-08','哈哈家',31 );
insert into orderinfo( customerid,customername,ordertime,sendlocation,orderstatus ) values( 2,'聪海信息科技有限公司','2011-01-10','哈哈家',31 );
insert into orderinfo( customerid,customername,ordertime,sendlocation,orderstatus ) values( 2,'聪海信息科技有限公司','2011-01-08','哈哈家',31 );
insert into orderinfo( customerid,customername,ordertime,sendlocation,orderstatus ) values( 1,'yc公司','2011-01-15','哈哈家',31 );
insert into orderinfo( customerid,customername,ordertime,sendlocation,orderstatus ) values( 3,'要走有限公司','2011-01-15','哈哈家',31 );
insert into orderinfo( customerid,customername,ordertime,sendlocation,orderstatus ) values( 4,'要走信息科技有限公司','2011-01-15','哈哈家',31 );
insert into orderinfo( customerid,customername,ordertime,sendlocation,orderstatus ) values( 5,'流失信息科技有限公司','2011-01-15','哈哈家',31 );

select * from orderinfo;



insert into orderitem(orderid  ,pname ,ordernumber ,unit,price,countprice) values(1,'飞机','10','个',1000,10000);
insert into orderitem(orderid  ,pname ,ordernumber ,unit,price,countprice) values(1,'火箭','10','个',10000,100000);
insert into orderitem(orderid  ,pname ,ordernumber ,unit,price,countprice) values(2,'火箭','10','个',10000,100000);
insert into orderitem(orderid  ,pname ,ordernumber ,unit,price,countprice) values(3,'火箭','10','个',10000,100000);
insert into orderitem(orderid  ,pname ,ordernumber ,unit,price,countprice) values(4,'火箭','10','个',10000,100000);
insert into orderitem(orderid  ,pname ,ordernumber ,unit,price,countprice) values(5,'火箭','10','个',10000,100000);
insert into orderitem(orderid  ,pname ,ordernumber ,unit,price,countprice) values(5,'火箭','10','个',10000,100000);
insert into orderitem(orderid  ,pname ,ordernumber ,unit,price,countprice) values(5,'火箭','10','个',10000,100000);
insert into orderitem(orderid  ,pname ,ordernumber ,unit,price,countprice) values(6,'火箭','10','个',10000,100000);
insert into orderitem(orderid  ,pname ,ordernumber ,unit,price,countprice) values(7,'火箭','10','个',10000,100000);

select * from orderitem;



insert into service(servicetype,summary,customerid,servicestatus,createperson,createdate) values(33,'询问收音机价格',1,36,'王五',now());
insert into service(servicetype,summary,customerid,servicestatus,createperson,createdate) values(33,'询问收音机价格',1,36,'王五',now());
insert into service(servicetype,summary,customerid,servicestatus,createperson,createdate) values(33,'询问收音机价格',1,36,'王五',now());
insert into service(servicetype,summary,customerid,servicestatus,createperson,createdate) values(34,'询问收音机价格',1,36,'王五',now());
insert into service(servicetype,summary,customerid,servicestatus,createperson,createdate) values(34,'询问收音机价格',1,36,'王五',now());
insert into service(servicetype,summary,customerid,servicestatus,createperson,createdate) values(34,'询问收音机价格',1,36,'王五',now());
insert into service(servicetype,summary,customerid,servicestatus,createperson,createdate) values(35,'询问收音机价格',1,36,'王五',now());
insert into service(servicetype,summary,customerid,servicestatus,createperson,createdate) values(35,'询问收音机价格',1,36,'王五',now());
insert into service(servicetype,summary,customerid,servicestatus,createperson,createdate) values(35,'询问收音机价格',1,36,'王五',now());

insert into chance values(1,'获取客户电话获取机会来源','yc公司','70','有意向采购公司的飞机','杨影','销售机会','李四','2016-8-19',3,'2016-8-20',6);
insert into chance values(2,'获取客户电话','聪海信息科技有限公司','70','有意向采购公司的火箭','王琪','销售机会','李四','2016-8-19',3,'2016-8-20',5);

select * from chance;