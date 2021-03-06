package com.stdu.inspection.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;
import java.io.Serializable;
import java.util.Date;

 /**
 * <p>
 * 
 * </p>
 *
 * @author Jancoyan
 * @since 2021-10-20
 */
@TableName("damage")
@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
public class Damage extends Model<Damage> {

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 上传任务的人，也就是巡检拍照的人
     */
    private Integer postUser;

    /**
     * 损伤类型，引用损伤类型表的id
     */
    private Integer damageType;

    /**
     * 路段，暂时不用这个字段
     */
    private Integer railway;

    /**
     * 经纬度
     */
    private String location;

    /**
     * 上传的时候，对损伤的描述
     */
    private String description;

    /**
     * 上传日期
     */
    private Date postDate;

    /**
     * 任务状态，0表示未接收，1表示已接受
     */
    private Integer status;

    /**
     * 损伤修复日期
     */
    private Date fixedDate;


    /**
     * 上报来源，说明上报的是人还是车
     */
    private Integer postSource;




}
