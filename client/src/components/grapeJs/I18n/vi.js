const vi = (editor) => {
    editor.I18n.addMessages({
        vi: {
            assetManager: {
                addButton: 'Thêm ảnh',
                inputPlh: 'Nhập link ảnh: http://image.jpg',
                modalTitle: 'Chọn ảnh',
                uploadTitle: 'Kéo thả file vào đây hoặc click để upload',
            },
            blockManager: {
                labels: {
                    'column1': '1 Cột',
                    'column2': '2 Cột',
                    'column3': '3 Cột',
                    'column3-7': '2 Cột (1 nhỏ 1 lớn)',
                    'image': 'Ảnh',
                    'text': 'Văn bản',
                    'link': 'Liên kết',
                    'video': 'Video',
                    'map': 'Bản đồ',
                },
                categories: {
                    'Basic': 'Khối cơ bản',
                    'Extra': 'Khối mở rộng',
                    'Blog': 'Khối Blog',
                    'Contact': 'Khối liên hệ',
                    'Content': 'Khối nội dung',
                    'CTA': 'Khối CTA',
                    'Commerce': 'Khối thương mại',
                    'Features': 'Khối tính năng',
                    'Footer': 'Khối chân trang',
                    'Header': 'Khối tiêu đề',
                    'Gallery': 'Khối thư viện',
                    '3D Model': 'Mô hình 3D',
                    'Hero': 'Khối Hero',
                    'Pricing': 'Khối giá',
                    'Statistics': 'Khối thống kê',
                    'Steps': 'Khối bước',
                    'Team': 'Khối nhóm',
                    'Testimonials': 'Khối chứng nhận',
                    'Layout': 'Khối bố cục',
                },
            },
            domComponents: {
                names: {
                    '': 'Box',
                    wrapper: 'Body',
                    text: 'Text',
                    comment: 'Bình luận',
                    image: 'Hình ảnh',
                    video: 'Video',
                    label: 'Nhãn',
                    link: 'Liên kết',
                    map: 'Google Map',
                    tfoot: 'Chân bảng biểu',
                    tbody: 'Thân bảng biểu',
                    thead: 'Đầu bảng biểu',
                    table: 'Bảng biểu',
                    Row: 'Hàng',
                    Cell: 'Cột',
                },
            },
            deviceManager: {
                device: '',
                devices: {
                    desktop: 'Máy tính',
                    tablet: 'Máy tính bảng',
                    mobileLandscape: 'Di động nằm ngang',
                    mobilePortrait: 'Di động dọc',
                },
            },
            panels: {
                buttons: {
                    titles: {
                        Preview: 'Xem thử',
                        fullscreen: 'Toàn màn hình',
                        'sw-visibility': 'X-ray',
                        'export-template': 'Xem mã',
                        'open-sm': 'Trình soạn thảo style',
                        'open-tm': 'Thiết lập',
                        'open-layers': 'Trình soạn thảo lớp',
                        'open-blocks': 'Mở khối',
                    },
                },
            },
            selectorManager: {
                label: 'Classes',
                selected: 'Đã chọn',
                emptyState: '- Trạng thái -',
                states: {
                    hover: 'Lướt qua',
                    active: 'Chạm',
                    'nth-of-type(2n)': 'Chẵn/Lẻ',
                },
            },
            styleManager: {
                empty: 'Chọn 1 phần tử trước khi sử dụng',
                layer: 'Lớp',
                fileButton: 'Hình ảnh',
                sectors: {
                    general: 'Chung',
                    layout: 'Bố cục',
                    typography: 'Kiểu chữ',
                    decorations: 'Trang trí',
                    extra: 'Mở rộng',
                    flex: 'Flex',
                    dimension: 'Kích thước',
                },
                properties: {
                    'text-shadow-h': 'X',
                    'text-shadow-v': 'Y',
                    'text-shadow-blur': 'Mờ',
                    'text-shadow-color': 'Màu',
                    'box-shadow-h': 'X',
                    'box-shadow-v': 'Y',
                    'box-shadow-blur': 'Mờ',
                    'box-shadow-spread': 'Spread',
                    'box-shadow-color': 'Màu',
                    'box-shadow-type': 'Loại',
                    'border-top-left-radius-sub': 'Trên góc trái',
                    'border-top-right-radius-sub': 'Trên góc phải',
                    'border-bottom-right-radius-sub': 'Dưới góc phải',
                    'border-bottom-left-radius-sub': 'Dưới góc trái',
                    'transform-rotate-x': 'Rotate X',
                    'transform-rotate-y': 'Rotate Y',
                    'transform-rotate-z': 'Rotate Z',
                    'transform-scale-x': 'Scale X',
                    'transform-scale-y': 'Scale Y',
                    'transform-scale-z': 'Scale Z',
                    'transition-property-sub': 'Thuộc tính',
                    'transition-duration-sub': 'Duration',
                    'transition-timing-function-sub': 'Timing',
                    'background-image-sub': 'Hình ảnh',
                    'background-repeat-sub': 'Lặp lại',
                    'background-position-sub': 'Vị trí',
                    'background-attachment-sub': 'Đính kèm',
                    'background-size-sub': 'Kích thước',
                },
            },
            traitManager: {
                empty: 'Chọn 1 thành phần trước khi sử dụng',
                label: 'Cấu hình',
                traits: {
                    labels: {
                        id: 'Id',
                        alt: 'Mô tả',
                        title: 'Tiêu đề',
                        href: 'Liên kết',
                        address: 'Địa chỉ',
                        mapType: 'Bản đồ',
                        zoom: 'Phóng to',
                        target: 'Mở cửa sổ',
                    },
                    options: {
                        target: {
                            false: 'Cửa sổ hiện tại',
                            _blank: 'Cửa sổ mới',
                        },
                        mapType: {
                            roadMap: 'Đường bộ',
                            sateLlite: 'Vệ tinh',
                        },
                    },
                },
            },
            storageManager: {
                recover: 'Bạn có muốn khôi phục những thay đổi chưa được lưu?',
            },
        }
    });
}

export default vi;