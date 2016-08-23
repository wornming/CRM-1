select uname,userage,tiaomu from userinfo
inner join datadirectorys on
userinfo.role=datadirectorys.id
where uname='a';

select * from chance;

select * from datadirectorys where dtype='district';