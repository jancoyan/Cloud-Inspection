package com.stdu.inspection.mapper;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.stdu.inspection.pojo.Task;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.stdu.inspection.pojo.TaskComplete;
import com.stdu.inspection.pojo.TaskProcess;

import java.util.Date;
import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author Jancoyan
 * @since 2021-10-20
 */
public interface TaskMapper extends BaseMapper<Task> {

    TaskProcess getTaskProcessById(String taskId);

    IPage<TaskProcess> listTaskByProcess(IPage<TaskProcess> iPage, Wrapper ew);

    boolean insertCompletePicture(String id, String filename);

    boolean submitTask(String taskId, String description);

    IPage<TaskComplete> listTaskComplete(IPage<TaskComplete> iPage, Wrapper ew);

    void delayTask(String taskId, String time, String description);

    List<String> listTaskImage(String id);

    void insertCompleteTask(String taskId, Integer damageId, Date receiveDate, Integer receiver,
                            Date deadline,
                            Date submitDate);

    IPage<TaskProcess> listTaskAllByProcess(IPage<TaskProcess> iPage, Wrapper ew);
}
