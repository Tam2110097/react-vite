import { Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const {
        isDetailOpen,
        setIsDetailOpen,
        dataDetail,
        setDataDetail
    } = props;
    return (
        <>
            <Drawer
                title="Chi tiết User"
                open={isDetailOpen}
                onClose={() => {
                    setDataDetail(null)
                    setIsDetailOpen(false)
                }}
                maskClosable={false}
            >
                {dataDetail ?
                    <>
                        <p>Id: {dataDetail._id}</p>
                        <br />
                        <p>Full name: {dataDetail.fullName}</p>
                        <br />
                        <p>Email: {dataDetail.email}</p>
                        <br />
                        <p>Phone number {dataDetail.phone}</p>
                        <br />
                    </>
                    :
                    <>
                        <p>Không có dữ liệu</p>
                    </>
                }
            </Drawer>
        </>
    )
}

export default ViewUserDetail;