package com.newdjk.doctor.ui.fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.widget.DividerItemDecoration;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.OrientationHelper;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RelativeLayout;

import com.ajguan.library.EasyRefreshLayout;
import com.ajguan.library.LoadModel;
import com.newdjk.doctor.R;
import com.newdjk.doctor.basic.BasicFragment;
import com.newdjk.doctor.ui.adapter.ConsultMessageAdapter1;
import com.newdjk.doctor.ui.entity.AllRecordForDoctorEntity;
import com.newdjk.doctor.ui.entity.ConsultMessageEntity;
import com.newdjk.doctor.ui.entity.InquiryRecordListEntity;
import com.newdjk.doctor.ui.entity.UnreadMessageEntity;
import com.newdjk.doctor.ui.entity.UpdateConsultUnreadNum;
import com.newdjk.doctor.ui.entity.UpdateImMessageEntity;
import com.newdjk.doctor.utils.SQLiteUtils;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.Unbinder;

public class ConsultListFragment extends BasicFragment {

    @BindView(R.id.mRecyclerview)
    RecyclerView mRecyclerview;
    Unbinder unbinder;
    @BindView(R.id.easylayout)
    EasyRefreshLayout mEasylayout;
    @BindView(R.id.mNodataContainer)
    RelativeLayout mNodataContainer;
    // @BindView(R.id.click_refresh)
//    TextView clickRefresh;
//    @BindView(R.id.no_data_tip)
//    LinearLayout noDataTip;
    private ConsultMessageAdapter1 mConsultMessageAdapter;
    private InquiryRecordListEntity mInquiryRecordListEntity;
    private List<AllRecordForDoctorEntity> dataList1 = new ArrayList<>();
    private List<UnreadMessageEntity> mAllUnreadMessageList;
    private int index = 1;
    List<ConsultMessageEntity> dataList = new ArrayList<>();

    public static ConsultListFragment newInstance(List<UnreadMessageEntity> allUnreadMessageList) {
        Bundle args = new Bundle();
        args.putSerializable("allUnreadMessageList", (Serializable) allUnreadMessageList);
        ConsultListFragment myFragment = new ConsultListFragment();
        myFragment.setArguments(args);
        return myFragment;
    }

    @Override
    protected int initViewResId() {
        return R.layout.consult_list;
    }

    @Override
    protected void initView() {
        mConsultMessageAdapter = new ConsultMessageAdapter1(dataList1,1);
        mRecyclerview.addItemDecoration(new DividerItemDecoration(getContext(), DividerItemDecoration.VERTICAL));
        mRecyclerview.setAdapter(mConsultMessageAdapter);
        mRecyclerview.setLayoutManager(new LinearLayoutManager(getContext(), OrientationHelper.VERTICAL, false));
        mEasylayout.setLoadMoreModel(LoadModel.NONE);
    }

    @Override
    protected void initListener() {

        mEasylayout.addEasyEvent(new EasyRefreshLayout.EasyEvent() {
            @Override
            public void onLoadMore() {
                getConsultRecordList1( );
            }

            @Override
            public void onRefreshing() {
                getConsultRecordList1( );
            }
        });

    }

    @Override
    protected void initData() {
        try {
            // mAllUnreadMessageList = (List<UnreadMessageEntity>) getArguments().getSerializable("allUnreadMessageList");
            // getConsultRecordList("1");
            getConsultRecordList1( );
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Override
    protected void otherViewClick(View view) {
//        switch (view.getId()) {
//            case R.id.click_refresh:
////                refreshLayout.setRefreshing(true);
//                getConsultRecordList("1");
//                break;
//        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = super.onCreateView(inflater, container, savedInstanceState);
        EventBus.getDefault().register(this);
        unbinder = ButterKnife.bind(this, rootView);
        return rootView;
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        //  mInquiryRecordListEntity = (InquiryRecordListEntity)getArguments().getSerializable("consultMessage");
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        EventBus.getDefault().unregister(this);
        unbinder.unbind();
    }
    @Subscribe(threadMode = ThreadMode.MAIN)
    public void userEventBus(UpdateImMessageEntity userEvent) {
        // GetAllRecordForDoctor();
        //  refreshView(userEvent.ImId);
        getConsultRecordList1( );
    }
    private void getConsultRecordList1( ) {
        List<AllRecordForDoctorEntity> list = SQLiteUtils.getInstance().selectImDataByServiceCodeAndStatus("1101",0);
        if (mEasylayout == null) return;
        if (mEasylayout.isRefreshing())  mEasylayout.refreshComplete();
        if (list.size() >0) {
            mNodataContainer.setVisibility(View.GONE);
            mEasylayout.setVisibility(View.VISIBLE);
            dataList1.clear();
            dataList1 = list;
            mConsultMessageAdapter.setNewData(dataList1);
            mEasylayout.refreshComplete();
        }
        else {
            mNodataContainer.setVisibility(View.VISIBLE);
            mEasylayout.setVisibility(View.GONE);
        }
    }

  /*  private void getConsultRecordList( String chatStatus) {
        if (mEasylayout == null) return;
        Map<String, String> map = new HashMap<>();
        map.put("DoctorId", String.valueOf(SpUtils.getInt(Contants.Id, 0)));
        map.put("ChatStatus", chatStatus);
        map.put("PageIndex", "1");
        map.put("PageSize", "10000");
        Map<String, String> headMap = new HashMap<>();
        headMap.put("Authorization",SpUtils.getString(Contants.Token));
        mMyOkhttp.post().url(HttpUrl.GetConsultRecordList).headers(headMap).params(map).tag(this).enqueue(new GsonResponseHandler<ResponseEntity<ConsultDataEntity>>() {
            @Override
            public void onSuccess(int statusCode, ResponseEntity<ConsultDataEntity> entity) {
                if (mEasylayout == null) return;
                if (mEasylayout.isRefreshing())  mEasylayout.refreshComplete();
                if (entity.getCode() == 0) {
                    ConsultDataEntity consultDataEntity = entity.getData();
                    if (consultDataEntity != null && consultDataEntity.getTotal() > 0) {
                        mNodataContainer.setVisibility(View.GONE);
                        mEasylayout.setVisibility(View.VISIBLE);
                       *//* if (consultDataEntity.getTotal() < 10){
                            mEasylayout.setLoadMoreModel(LoadModel.NONE);
                        }*//*
                        int index1 =  0;
                        List<ConsultMessageEntity> list = consultDataEntity.getReturnData();
                        for (int i = 0; i < mAllUnreadMessageList.size(); i++) {
                            String patientId = mAllUnreadMessageList.get(i).getPatientId();
                            for (int k = 0; k < list.size(); k++) {
                                String id = list.get(k).getApplicantIMId();
                                if (id.equals(patientId)) {
                                    ConsultMessageEntity ConsultMessageEntity = list.get(k);
                                    ConsultMessageEntity.setCreateTime(mAllUnreadMessageList.get(i).getTimeStamp());
                                    ConsultMessageEntity.setUnReadNum(mAllUnreadMessageList.get(i).getUnReadNum());
                                    list.remove(list.get(k));
                                    list.add(index1,ConsultMessageEntity);
                                    index1 = index1+1;
                                    break;
                                }
                            }
                        }
                     //   if (index ==1) {
                            dataList.clear();
                            dataList = list;
                            mConsultMessageAdapter.setNewData(dataList);
                            mEasylayout.refreshComplete();
                      *//*  } else {
                            mEasylayout.closeLoadView();
                         //   dataList.addAll(list);
                            mConsultMessageAdapter.getData().addAll(list);
                            mConsultMessageAdapter.notifyDataSetChanged();
                        }*//*
                    } else {
                        mNodataContainer.setVisibility(View.VISIBLE);
                        mEasylayout.setVisibility(View.GONE);
                    }
                } else {
                    mNodataContainer.setVisibility(View.VISIBLE);
                    mEasylayout.setVisibility(View.GONE);
                    toast(entity.getMessage());
                }

            }

            @Override
            public void onFailures(int statusCode, String errorMsg) {
                CommonMethod.requestError(statusCode, errorMsg);
            }
        });
    }*/

    /* @Subscribe(threadMode = ThreadMode.MAIN)
     public void userEventBus(UpdateConsultUnreadNum userEvent) {
         index = 1;
         getConsultRecordList(index,"1");
     }*/
    public void flashView (UpdateConsultUnreadNum userEvent) {
        mAllUnreadMessageList = userEvent.UnreadMessageList;
        getConsultRecordList1( );
        //   getConsultRecordList("1");
    }

    public void freshUnreadList (UpdateConsultUnreadNum userEvent) {
        mAllUnreadMessageList = userEvent.UnreadMessageList;
        int index1 =  0;
        for (int i = 0; i < mAllUnreadMessageList.size(); i++) {
            String patientId = mAllUnreadMessageList.get(i).getPatientId();
            for (int k = 0; k < dataList.size(); k++) {
                String id = dataList.get(k).getApplicantIMId();
                if (id.equals(patientId)) {
                    dataList.get(k).setUnReadNum(mAllUnreadMessageList.get(i).getUnReadNum());
                    dataList.get(k).setCreateTime(mAllUnreadMessageList.get(i).getTimeStamp());
                    ConsultMessageEntity consultMessageEntity = dataList.get(k);
                    dataList.remove(dataList.get(k));
                    dataList.add(index1,consultMessageEntity);
                    //  Collections.swap(list,index1,k);
                    index1 = index1+1;
                    break;
                }
            }
        }
        mConsultMessageAdapter.notifyDataSetChanged();
    }


    @Override
    public void onDestroy() {
        super.onDestroy();
    }
}
