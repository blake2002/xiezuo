
## 1. mybatis-plus说明：

###  +  [Mybatis-plus官网](https://mp.baomidou.com/)
### + 简介：Mybatis-Plus（简称MP）是一个 Mybatis 的增强工具，在 Mybatis 的基础上只做增强不做改变，为简化开发、提高效率而生。
使用它可以简化单表的操作, 节省开发时间, 国人写的文档已经非常通俗易懂了, 所以这里只是对其进行一些规范,便于多人协作开发
### + pom 依赖代码



```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.2.0</version>
</dependency>
```



### + mybatis-plus 配置

  ```yaml
  #mybatis
  mybatis-plus:
    mapper-locations: classpath:/mapper/*Mapper.xml
    #实体扫描，多个package用逗号或者分号分隔
    typeAliasesPackage: com.demo.model
    #typeEnumsPackage: com.baomidou.springboot.entity.enums
    global-config:
      #刷新mapper 调试神器
      db-config:
        #主键类型  0:"数据库ID自增", 1:"用户输入ID",2:"全局唯一ID (数字类型唯一ID)", 3:"全局唯一ID UUID";
        id-type: AUTO
        #字段策略 0:"忽略判断",1:"非 NULL 判断"),2:"非空判断"
        field-strategy: not_empty
        #驼峰下划线转换
        column-underline: true
        #数据库大写下划线转换
        #capital-mode: true
        #逻辑删除配置
        logic-delete-value: 1
        logic-not-delete-value: 0
        db-type: OTHER
      refresh: true
        #自定义填充策略接口实现
        #meta-object-handler: com.baomidou.springboot.xxx
        #自定义SQL注入器
    #sql-injector: com.baomidou.mybatisplus.extension.injector.LogicSqlInjector
    configuration:
      map-underscore-to-camel-case: true
      cache-enabled: false
      # plus sql 日志打印
      #log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
  ```

### + 分页等配置类

    ```java
    package com.demo.config;
    
    import com.baomidou.mybatisplus.extension.plugins.OptimisticLockerInterceptor;
    import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
    import org.mybatis.spring.annotation.MapperScan;
    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.context.annotation.Profile;
    
    @Configuration
    @MapperScan("com.demo.mapper")
    public class MybatisPlusConfig {
        /**
         * 分页插件
         */
        @Bean
        public PaginationInterceptor paginationInterceptor() {
            return new PaginationInterceptor();
        }
    //    /**
    //     * 乐观锁插件
    //     * @return
    //     */
    //    @Bean
    //    public OptimisticLockerInterceptor optimisticLockerInterceptor(){
    //        return new OptimisticLockerInterceptor();
    //    }
    }
    ```


    

### + model 

    ```java
    package com.demo.model;
    
    import com.baomidou.mybatisplus.annotation.TableField;
    import com.baomidou.mybatisplus.annotation.TableName;
    import com.baomidou.mybatisplus.extension.activerecord.Model;
    
    @TableName("aaa")
    public class WindCodePo extends Model {
    
        @TableField("windcode")
        private String windCode;
    
        public String getSid() {
            return sid;
        }
    
        public void setSid(String sid) {
            this.sid = sid;
        }
    
        @TableField("sid")
        private String sid ;
    
        public String getWindCode() {
            return windCode;
        }
    
        public void setWindCode(String windCode) {
            this.windCode = windCode;
        }
    
        @Override
        public String toString()
        {
            return String.format("WindCodePo{windcode=%s,sid=%s}",windCode,sid);
        }
    }
    ```

### + mapper

      ```java
      package com.demo.mapper;
      
      import com.baomidou.mybatisplus.core.mapper.BaseMapper;
      import com.demo.model.WindCodePo;
      import org.apache.ibatis.annotations.Mapper;
      @Mapper
      public interface WindCodeMapper extends BaseMapper<WindCodePo> {
      
      }
      ```


###  + service
      ```java
      package com.demo.mapper;
      
      import com.baomidou.mybatisplus.core.mapper.BaseMapper;
      import com.demo.model.WindCodePo;
      import org.apache.ibatis.annotations.Mapper;
      @Mapper
      public interface WindCodeMapper extends BaseMapper<WindCodePo> {
      
      }
      
      ```

### + serviceimpl

      ``` 
      package com.demo.Service.Impl;
      
      import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
      import com.demo.Service.WindCodeService;
      import com.demo.mapper.WindCodeMapper;
      import com.demo.model.WindCodePo;
      import org.springframework.stereotype.Service;

      /**
       *
       */
      @Service
      public class WindCodeServiceImpl extends ServiceImpl<WindCodeMapper, WindCodePo> implements WindCode
      Service {
      }
      
      ```

##  2.  Druid 介绍

### + pom 依赖

    ```xml
     <dependency>
         <groupId>com.alibaba</groupId>
         <artifactId>druid</artifactId>
         <version>1.1.10</version>
    </dependency>
    ```

### + druid 配置

    ```yaml
    spring:
      datasource:
        url: jdbc:sqlserver://10.102.16.54:1433;DatabaseName=bbq
        driver-class-name: com.microsoft.sqlserver.jdbc.SQLServerDriver
        username: sa
        password: abcd1234
        type: com.alibaba.druid.pool.DruidDataSource
      druid:
        #   数据源其他配置
        initialSize: 5
        minIdle: 5
        maxActive: 20
        maxWait: 60000
        timeBetweenEvictionRunsMillis: 60000
        minEvictableIdleTimeMillis: 300000
        #每个数据库都不一样的 注意要
        validationQuery: SELECT 1
        testWhileIdle: true
        testOnBorrow: false
        testOnReturn: false
        poolPreparedStatements: true
        #   配置监控统计拦截的filters，去掉后监控界面sql无法统计，'wall'用于防火墙
        filters: stat,wall,slf4j
        maxPoolPreparedStatementPerConnectionSize: 20
        useGlobalDataSourceStat: true
        #慢SQL记录 如果上面validationQuery: SELECT 1 没有配置，而你配置了就会报错null
        connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500
        #使用spring自带的日志功能
        filter:
          slf4j:
            enabled: true
            statement-create-after-log-enabled: false
            statement-log-enabled: false
            statement-executable-sql-log-enable: true
            statement-log-error-enabled: true
            result-set-log-enabled: false
    ```


## 3.  日志配置

### + 使用自在日志sf4j ，配置文件如下

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE configuration>
  <!-- scan：当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true。 scanPeriod：设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒当scan为true时，此属性生效。默认的时间间隔为1分钟。 
  	debug：当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。 -->
  <configuration scan="false" scanPeriod="60 seconds" debug="false">
  	<!-- 定义日志的根目录 -->
  	<property name="LOG_HOME" value="log" />
  	<!-- 定义日志文件名称 -->
  	<property name="appName" value="bootdemo"></property>
  	<!-- ch.qos.logback.core.ConsoleAppender 表示控制台输出 -->
  	<appender name="stdout" class="ch.qos.logback.core.ConsoleAppender">
  		<!-- 日志输出格式：%d表示日期时间，%thread表示线程名，%-5level：级别从左显示5个字符宽度 %logger{50} 表示logger名字最长50个字符，否则按照句点分割。%msg：日志消息，%n是换行符 -->
  		<encoder>
  			<pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [ %thread ] - [ %-5level ] [%logger{50}:%line] - %msg%n</pattern>
  			<charset>UTF-8</charset>
  		</encoder>
  	</appender>
  
  	<!-- 滚动记录文件，先将日志记录到指定文件，当符合某个条件时，将日志记录到其他文件 -->
  	<appender name="appLogAppender"
  		class="ch.qos.logback.core.rolling.RollingFileAppender">
  		<!-- 指定日志文件的名称 -->
  		<file>${LOG_HOME}/${appName}.log</file>
  		<!-- 当发生滚动时，决定 RollingFileAppender 的行为，涉及文件移动和重命名 TimeBasedRollingPolicy： 
  			最常用的滚动策略，它根据时间来制定滚动策略，既负责滚动也负责出发滚动。 -->
  		<rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
  			<!-- 滚动时产生的文件的存放位置及文件名称 %d{yyyy-MM-dd}：按天进行日志滚动 %i：当文件大小超过maxFileSize时，按照i进行文件滚动 -->
  			<fileNamePattern>${LOG_HOME}/${appName}-%d{yyyy-MM-dd}-%i.log
  			</fileNamePattern>
  			<!-- 可选节点，控制保留的归档文件的最大数量，超出数量就删除旧文件。假设设置每天滚动， 且maxHistory是365，则只保存最近365天的文件，删除之前的旧文件。注意，删除旧文件是， 
  				那些为了归档而创建的目录也会被删除。 -->
  			<MaxHistory>30</MaxHistory>
  			<!-- 当日志文件超过maxFileSize指定的大小是，根据上面提到的%i进行日志文件滚动 注意此处配置SizeBasedTriggeringPolicy是无法实现按文件大小进行滚动的，必须配置timeBasedFileNamingAndTriggeringPolicy -->
  			<timeBasedFileNamingAndTriggeringPolicy
  				class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
  				<maxFileSize>100MB</maxFileSize>
  			</timeBasedFileNamingAndTriggeringPolicy>
  		</rollingPolicy>
  		<!-- 日志输出格式：%d表示日期时间，%thread表示线程名，%-5level：级别从左显示5个字符宽度 %logger{50} 表示logger名字最长50个字符，否则按照句点分割。%msg：日志消息，%n是换行符 -->
  		<encoder>
  			<pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [ %thread ] - [ %-5level ] [%logger{50}:%line] - %msg%n</pattern>
  			<charset>UTF-8</charset>
  		</encoder>
  	</appender>
  
  	<!-- Expo日志 -->
  	<appender name="expoLogAppender"
  		class="ch.qos.logback.core.rolling.RollingFileAppender">
  		<file>${LOG_HOME}/${appName}-expo.log</file>
  		<rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
  			<fileNamePattern>${LOG_HOME}/${appName}-expo-%d{yyyy-MM-dd}-%i.log
  			</fileNamePattern>
  			<MaxHistory>30</MaxHistory>
  			<!-- 当日志文件超过maxFileSize指定的大小是，根据上面提到的%i进行日志文件滚动 注意此处配置SizeBasedTriggeringPolicy是无法实现按文件大小进行滚动的，必须配置timeBasedFileNamingAndTriggeringPolicy -->
  			<timeBasedFileNamingAndTriggeringPolicy
  				class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
  				<maxFileSize>100MB</maxFileSize>
  			</timeBasedFileNamingAndTriggeringPolicy>
  		</rollingPolicy>
  		<!-- 日志输出格式：%d表示日期时间，%thread表示线程名，%-5level：级别从左显示5个字符宽度 %logger{50} 表示logger名字最长50个字符，否则按照句点分割。%msg：日志消息，%n是换行符 -->
  		<encoder>
  			<pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [ %thread ] - [ %-5level ] [%logger{50}:%line] - %msg%n</pattern>
  			<charset>UTF-8</charset>
  		</encoder>
  	</appender>
  
  	<!-- logger主要用于存放日志对象，也可以定义日志类型、级别 name：表示匹配的logger类型前缀，也就是包的前半部分 level：要记录的日志级别，包括 
  		TRACE < DEBUG < INFO < WARN < ERROR additivity：作用在于children-logger是否使用 rootLogger配置的appender进行输出，false：表示只用当前logger的appender-ref，true：表示当前logger的appender-ref和rootLogger的appender-ref都有效 -->
  	<!-- Spring framework logger -->
  	<logger name="org.springframework" level="error" additivity="false"></logger>
  
  	<logger name="cn.com.wind" level="debug" additivity="true"></logger>
  
  	<logger name="cn.com.wind.jcommodity.expo" level="info"
  		additivity="false">
  		<appender-ref ref="stdout" />
  		<appender-ref ref="expoLogAppender" />
  	</logger>
  
  	<!-- root与logger是父子关系，没有特别定义则默认为root，任何一个类只会和一个logger对应， 要么是定义的logger，要么是root，判断的关键在于找到这个logger，然后判断这个logger的appender和level。 -->
  	<root level="info">
  		<appender-ref ref="stdout" />
  		<appender-ref ref="appLogAppender" />
  	</root>
  
  </configuration>
  ```

### + 指定配置路径 在 resources 目录下application.yml

    ```yaml
    logging:
      config: classpath:logback-boot.xml
    ```

### + 说明： 当level设置成debug 时， mybatis-plus会打印sql  如下

    ```
    2019-10-18 09:44:16.647 [ http-nio-8084-exec-1 ] - [ DEBUG ] [org.mybatis.spring.SqlSessionUtils:49] - Creating a new SqlSession
    2019-10-18 09:44:16.686 [ http-nio-8084-exec-1 ] - [ DEBUG ] [org.mybatis.spring.SqlSessionUtils:49] - SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@6d6cb94d] was not registered for synchronization because synchronization is not active
    2019-10-18 09:44:17.353 [ http-nio-8084-exec-1 ] - [ DEBUG ] [o.m.spring.transaction.SpringManagedTransaction:49] - JDBC Connection [ConnectionID:5 ClientConnectionId: 2d91a877-a49c-489f-9e20-9397aa7c1820] will not be managed by Spring
    2019-10-18 09:44:17.646 [ http-nio-8084-exec-1 ] - [ DEBUG ] [c.b.m.e.p.p.optimize.JsqlParserCountOptimize:78] - JsqlParserCountOptimize sql=SELECT  windcode,sid  FROM aaa
    2019-10-18 09:44:17.749 [ http-nio-8084-exec-1 ] - [ DEBUG ] [com.demo.mapper.WindCodeMapper.selectPage:143] - ==>  Preparing: SELECT COUNT(1) FROM aaa 
    2019-10-18 09:44:17.944 [ http-nio-8084-exec-1 ] - [ DEBUG ] [com.demo.mapper.WindCodeMapper.selectPage:143] - ==> Parameters: 
    2019-10-18 09:44:18.123 [ http-nio-8084-exec-1 ] - [ DEBUG ] [com.alibaba.druid.pool.PreparedStatementPool:129] - stmt enter cache
    2019-10-18 09:44:18.244 [ http-nio-8084-exec-1 ] - [ DEBUG ] [com.demo.mapper.WindCodeMapper.selectPage:143] - ==>  Preparing: WITH selectTemp AS (SELECT TOP 100 PERCENT ROW_NUMBER() OVER (ORDER BY CURRENT_TIMESTAMP) as __row_number__, windcode,sid FROM aaa) SELECT * FROM selectTemp WHERE __row_number__ BETWEEN 1 AND 10 ORDER BY __row_number__ 
    2019-10-18 09:44:18.247 [ http-nio-8084-exec-1 ] - [ DEBUG ] [com.demo.mapper.WindCodeMapper.selectPage:143] - ==> Parameters: 
    2019-10-18 09:44:18.304 [ http-nio-8084-exec-1 ] - [ DEBUG ] [com.demo.mapper.WindCodeMapper.selectPage:143] - <==      Total: 10
    2019-10-18 09:44:18.307 [ http-nio-8084-exec-1 ] - [ DEBUG ] [com.alibaba.druid.pool.PreparedStatementPool:129] - stmt enter cache
    2019-10-18 09:44:18.310 [ http-nio-8084-exec-1 ] - [ DEBUG ] [org.mybatis.spring.SqlSessionUtils:49] - Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@6d6cb94d]
    ```


    
