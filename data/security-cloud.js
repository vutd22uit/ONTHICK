/* =========================================
   SECURITY CLOUD - QUESTION BANK (NT524)
   ========================================= */

// --- CHƯƠNG 1: GIỚI THIỆU HỆ THỐNG ĐÁM MÂY (1-33) ---
const securityCh1Questions = [
    {
        question: "Đặc tính nào của NIST cho phép người dùng tự cấp phát tài nguyên (như server, storage) mà không cần tương tác trực tiếp với nhân viên nhà cung cấp?",
        options: ["Broad network access", "Resource pooling", "On-demand self-service", "Measured service"],
        correct: 2,
        explanation: "On-demand self-service cho phép người dùng tự phục vụ thông qua giao diện web hoặc API."
    },
    {
        question: "Việc nhà cung cấp gom tài nguyên vật lý để phục vụ nhiều khách hàng khác nhau được gọi là:",
        options: ["Rapid elasticity", "Resource pooling", "Measured service", "Broad network access"],
        correct: 1,
        explanation: "Resource pooling là việc gộp tài nguyên vật lý để phục vụ mô hình đa người dùng (multi-tenancy)."
    },
    {
        question: "Chuyển đổi từ mô hình chi phí đầu tư lớn ban đầu (CapEx) sang chi phí vận hành hàng tháng (OpEx) là đặc điểm của:",
        options: ["Điện toán truyền thống", "Điện toán đám mây", "Ảo hóa cục bộ", "Mua phần cứng vật lý"],
        correct: 1,
        explanation: "Đám mây cho phép trả tiền theo mức sử dụng (Pay-as-you-go), thuộc chi phí vận hành (OpEx)."
    },
    {
        question: "Trong mô hình trách nhiệm chia sẻ, ai chịu trách nhiệm bảo mật vật lý (Physical Security) của trung tâm dữ liệu?",
        options: ["Khách hàng", "Cả hai bên", "Nhà cung cấp dịch vụ (Provider)", "Bên thứ ba"],
        correct: 2,
        explanation: "Nhà cung cấp đám mây chịu trách nhiệm bảo mật 'phía dưới' lớp ảo hóa, bao gồm cả hạ tầng vật lý."
    },
    {
        question: "Trụ cột nào trong 6 trụ cột kiến trúc (Six Architecture Pillars) nhấn mạnh vào việc sử dụng 'Infrastructure as Code' (IaC)?",
        options: ["Security", "Reliability", "Operational Excellence", "Cost Optimization"],
        correct: 2,
        explanation: "Operational Excellence tập trung vào tự động hóa vận hành thông qua mã nguồn."
    },
    {
        question: "Mẫu di trú nào (7R) thực hiện việc chuyển nguyên trạng ứng dụng lên mây mà không thay đổi mã nguồn?",
        options: ["Refactor", "Replatform", "Rehost", "Retain"],
        correct: 2,
        explanation: "Rehost còn được gọi là Lift-and-Shift."
    },
    {
        question: "Khái niệm 'Cattle' (Gia súc) trong quản lý máy chủ đám mây có ý nghĩa gì?",
        options: ["Máy chủ được chăm sóc đặc biệt", "Máy chủ vô danh, dễ dàng thay thế và tự động hóa", "Máy chủ có cấu hình phần cứng cực mạnh", "Máy chủ không bao giờ bị tắt"],
        correct: 1,
        explanation: "Cattle là tư duy coi máy chủ là tài nguyên có thể thay thế (Immutable infrastructure), ngược với 'Pets'."
    },
    {
        question: "Mô hình triển khai nào kết hợp giữa Public Cloud và Private Cloud?",
        options: ["Community Cloud", "Hybrid Cloud", "Multi-Cloud", "Local Cloud"],
        correct: 1,
        explanation: "Hybrid Cloud cho phép kết hợp sự linh hoạt của Public và tính kiểm soát của Private."
    },
    {
        question: "Thứ tự nào đúng về mức độ quản lý của khách hàng tăng dần (ít nhất đến nhiều nhất)?",
        options: ["SaaS < PaaS < IaaS", "IaaS < PaaS < SaaS", "PaaS < SaaS < IaaS", "SaaS < IaaS < PaaS"],
        correct: 0,
        explanation: "Khách hàng quản lý ít nhất ở SaaS (chỉ dữ liệu/config) và nhiều nhất ở IaaS (đến tận OS)."
    },
    {
        question: "Trong AWS, dịch vụ nào chịu trách nhiệm quản lý Định danh và Quyền truy cập?",
        options: ["VPC", "EC2", "IAM", "S3"],
        correct: 2,
        explanation: "IAM (Identity and Access Management) là dịch vụ cốt lõi cho bảo mật truy cập."
    },
    {
        question: "Đặc tính 'Rapid elasticity' của NIST giải quyết vấn đề gì?",
        options: ["Bảo mật dữ liệu", "Khả năng mở rộng hoặc thu hẹp tài nguyên cực nhanh theo nhu cầu", "Tính phí dịch vụ", "Truy cập từ mọi nơi"],
        correct: 1,
        explanation: "Elasticity là khả năng co giãn tài nguyên linh hoạt."
    },
    {
        question: "Trụ cột 'Reliability' tập trung vào yếu tố nào?",
        options: ["Giảm chi phí", "Tự động phục hồi sau sự cố và đảm bảo tính sẵn sàng (HA)", "Mã hóa dữ liệu", "Hiệu suất CPU"],
        correct: 1,
        explanation: "Reliability đảm bảo hệ thống hoạt động ổn định và tin cậy."
    },
    {
        question: "Tại sao mô hình OpEx lại có lợi cho các Startup?",
        options: ["Giảm rủi ro tài chính ban đầu", "Yêu cầu kỹ năng cao", "Sở hữu vĩnh viễn hạ tầng", "Bảo mật tuyệt đối"],
        correct: 0,
        explanation: "Startup không cần bỏ vốn lớn (CapEx) để mua server mà trả theo tháng (OpEx)."
    },
    {
        question: "Sự khác biệt chính giữa Cloud và IT truyền thống về mặt 'Provisioning' là gì?",
        options: ["Cloud dùng Ticket-driven", "Cloud dùng API-driven/Self-service", "Truyền thống nhanh hơn Cloud", "Cả hai giống nhau"],
        correct: 1,
        explanation: "Cloud cho phép cấp phát tài nguyên qua API/Portal tự động."
    },
    {
        question: "Việc chọn mô hình 'Identity-first' thay cho 'Perimeter-first' là đặc trưng của xu hướng bảo mật nào?",
        options: ["Phòng thủ chiều sâu", "Zero Trust", "Legacy Security", "Bảo mật vật lý"],
        correct: 1,
        explanation: "Trên mây, ranh giới mạng bị xóa nhòa, định danh trở thành hàng rào bảo mật chính."
    },
    {
        question: "Mẫu 'Refactor' (Tái cấu trúc) thường được áp dụng khi nào?",
        options: ["Cần di chuyển nhanh nhất có thể", "Muốn tận dụng tối đa lợi ích cloud-native (microservices, serverless)", "Muốn giữ nguyên hệ điều hành cũ", "Muốn xóa bỏ ứng dụng"],
        correct: 1,
        explanation: "Refactor đòi hỏi thay đổi mã nguồn sâu sắc để tối ưu cho cloud."
    },
    {
        question: "Trong mô hình chia sẻ, việc 'Patching' (vá lỗi) hệ điều hành khách trên EC2 là trách nhiệm của ai?",
        options: ["AWS", "Khách hàng", "Nhà sản xuất OS", "Cả AWS và khách hàng"],
        correct: 1,
        explanation: "Khách hàng quản lý mọi thứ từ lớp OS trở lên trong IaaS."
    },
    {
        question: "Cơ chế 'Auto-scaling' hỗ trợ trụ cột nào nhất?",
        options: ["Security", "Reliability & Performance Efficiency", "Sustainability", "Operational Excellence"],
        correct: 1,
        explanation: "Auto-scaling giúp duy trì tính sẵn sàng (Reliability) và hiệu suất phù hợp tải."
    },
    {
        question: "Tại sao 'Data Residency' (Vị trí dữ liệu) là một thách thức lớn khi dùng Public Cloud?",
        options: ["Dữ liệu dễ bị mất", "Luật pháp một số quốc gia yêu cầu dữ liệu phải lưu trữ trong nước", "Chi phí lưu trữ cao", "Tốc độ truy cập chậm"],
        correct: 1,
        explanation: "Nhiều ngành nhạy cảm yêu cầu dữ liệu không được rời khỏi biên giới quốc gia."
    },
    {
        question: "Service Mapping: Dịch vụ tương ứng của OpenStack Glance trong AWS là gì?",
        options: ["EBS", "S3", "AMI", "IAM"],
        correct: 2,
        explanation: "Glance quản lý ảnh máy ảo, tương đương với Amazon Machine Image (AMI)."
    },
    {
        question: "Trụ cột 'Sustainability' trong đám mây nhấn mạnh điều gì?",
        options: ["Tăng mật độ VM trên host để tiết kiệm năng lượng", "Dùng server cũ", "Không dùng máy ảo", "Dùng ít RAM"],
        correct: 0,
        explanation: "Sustainability tối ưu tài nguyên để giảm footprint môi trường."
    },
    {
        question: "Lợi ích của 'Measured service' đối với tính minh bạch là gì?",
        options: ["Người dùng biết chính xác mình đã dùng gì và trả bao nhiêu tiền", "Tăng bảo mật", "Tăng tốc độ mạng", "Giảm số lượng server"],
        correct: 0,
        explanation: "Nó cung cấp các chỉ số đo lường chính xác việc sử dụng tài nguyên."
    },
    {
        question: "Khái niệm 'Time-to-market' được rút ngắn trên cloud nhờ vào:",
        options: ["Hạ tầng vật lý mạnh", "Khả năng triển khai tài nguyên trong vài phút thay vì vài tháng", "Chi phí rẻ", "Bảo mật tốt"],
        correct: 1,
        explanation: "Sự linh hoạt giúp triển khai ứng dụng cực nhanh."
    },
    {
        question: "Trong 7R, 'Repurchase' (Mua lại) có nghĩa là gì?",
        options: ["Mua thêm server vật lý", "Chuyển sang dùng một sản phẩm SaaS khác", "Mua lại code cũ", "Tái sử dụng server"],
        correct: 1,
        explanation: "Thay vì tự chạy app, doanh nghiệp chuyển sang mua license SaaS (ví dụ từ Exchange sang M365)."
    },
    {
        question: "Tính năng 'Snapshot' hỗ trợ trực tiếp cho mục tiêu nào?",
        options: ["Phòng chống virus", "Sao lưu và phục hồi dữ liệu", "Tăng tốc CPU", "Giảm độ trễ mạng"],
        correct: 1,
        explanation: "Snapshot chụp trạng thái hệ thống tại một thời điểm để backup."
    },
    {
        question: "Trong mô hình Hybrid Cloud, công nghệ nào thường được dùng để kết nối an toàn?",
        options: ["HTTP", "FTP", "VPN hoặc Direct Connect", "Bluetooth"],
        correct: 2,
        explanation: "VPN/Direct Connect tạo đường truyền riêng tư giữa local và cloud."
    },
    {
        question: "Thế nào là 'Blast Radius' (Bán kính ảnh hưởng)?",
        options: ["Tầm xa của tín hiệu wifi", "Phạm vi ảnh hưởng tối đa của một sự cố hoặc cuộc tấn công", "Kích thước của trung tâm dữ liệu", "Số lượng user truy cập"],
        correct: 1,
        explanation: "Cách ly tốt giúp thu hẹp phạm vi ảnh hưởng khi có lỗi xảy ra."
    },
    {
        question: "Đặc điểm 'Broad network access' có nghĩa là:",
        options: ["Chỉ truy cập được bằng mạng LAN", "Truy cập được từ nhiều loại thiết bị (PC, mobile, tablet) qua mạng chuẩn", "Mạng phải rất rộng", "Mạng có tốc độ 1Gbps"],
        correct: 1,
        explanation: "Dịch vụ đám mây phải khả dụng trên nhiều nền tảng và thiết bị."
    },
    {
        question: "Theo bài giảng, Cloud giúp phân bổ lại trách nhiệm (Redistribute), vậy nó có loại bỏ trách nhiệm của khách hàng không?",
        options: ["Có", "Không", "Chỉ ở SaaS", "Chỉ ở IaaS"],
        correct: 1,
        explanation: "Cloud không loại bỏ trách nhiệm mà chỉ thay đổi cách phân chia giữa khách hàng và nhà cung cấp."
    },
    {
        question: "Service Mapping: AWS EBS tương đương với dịch vụ nào trong OpenStack?",
        options: ["Swift", "Cinder", "Nova", "Glance"],
        correct: 1,
        explanation: "Cinder cung cấp Block Storage tương đương Elastic Block Store (EBS)."
    },
    {
        question: "Một 'Landing Zone' trong kiến trúc đám mây là gì?",
        options: ["Khu vực máy bay hạ cánh", "Môi trường đám mây được thiết lập sẵn các chuẩn bảo mật và quản trị", "Trang chủ của AWS", "Vùng đặt máy chủ vật lý"],
        correct: 1,
        explanation: "Landing Zone là khuôn mẫu an toàn để triển khai các tài khoản/workload mới."
    },
    {
        question: "TCO (Total Cost of Ownership) bao gồm những yếu tố nào?",
        options: ["Chỉ phí thuê server", "Chi phí hạ tầng, bản quyền, nhân sự và đào tạo", "Chỉ chi phí điện", "Chỉ chi phí mạng"],
        correct: 1,
        explanation: "TCO là tổng chi phí sở hữu bao gồm cả chi phí hữu hình và vô hình."
    },
    {
        question: "Nguyên tắc 'Micro-segmentation' giúp ích gì cho bảo mật?",
        options: ["Chia nhỏ mạng để giới hạn truy cập ngang (east-west)", "Làm mạng chạy nhanh hơn", "Giảm số lượng IP", "Tăng cường kết nối internet"],
        correct: 0,
        explanation: "Micro-segmentation ngăn chặn sự lan rộng của tấn công bên trong mạng."
    }
];

// --- CHƯƠNG 2: MÔ HÌNH DỊCH VỤ CLOUD (34-66) ---
const securityCh2Questions = [
    {
        question: "Trong mô hình PaaS (Platform as a Service), khách hàng quản lý thành phần nào?",
        options: ["Hệ điều hành (OS)", "Ứng dụng và Dữ liệu", "Mạng vật lý", "Lớp ảo hóa"],
        correct: 1,
        explanation: "PaaS cung cấp sẵn runtime/OS, khách hàng chỉ cần lo code and data."
    },
    {
        question: "Ví dụ nào sau đây là dịch vụ IaaS?",
        options: ["Google App Engine", "Amazon EC2", "Gmail", "Salesforce"],
        correct: 1,
        explanation: "EC2 cung cấp hạ tầng máy ảo thô (Infrastructure)."
    },
    {
        question: "Mô hình SaaS (Software as a Service) giúp doanh nghiệp tối ưu hóa điều gì nhất?",
        options: ["Khả năng tùy chỉnh mã nguồn", "Tốc độ sử dụng ngay lập tức và giảm chi phí vận hành", "Quản lý Kernel hệ điều hành", "Kiểm soát phần cứng vật lý"],
        correct: 1,
        explanation: "SaaS là các ứng dụng 'mì ăn liền', dùng ngay qua trình duyệt."
    },
    {
        question: "Rủi ro 'Identity lock-in' xảy ra khi:",
        options: ["Mất mật khẩu", "Phụ thuộc vào hệ thống IAM/IdP riêng của một nhà cung cấp", "Dữ liệu bị rò rỉ", "Không thể tạo tài khoản mới"],
        correct: 1,
        explanation: "Khi IdP là độc quyền, việc chuyển sang nền tảng khác rất khó khăn."
    },
    {
        question: "Giải pháp để giảm thiểu rủi ro 'Identity lock-in' là:",
        options: ["Dùng nhiều mật khẩu", "Sử dụng các chuẩn mở như SAML, OIDC hoặc IdP bên ngoài (Okta, Keycloak)", "Không dùng IAM", "Chỉ dùng Private Cloud"],
        correct: 1,
        explanation: "Chuẩn mở giúp định danh có thể dùng chung giữa các nhà cung cấp."
    },
    {
        question: "Mô hình dịch vụ nào thường có chi phí nhân sự vận hành (Operational manpower) cao nhất?",
        options: ["SaaS", "PaaS", "IaaS", "DaaS"],
        correct: 2,
        explanation: "IaaS yêu cầu khách hàng tự quản trị OS, patch lỗi, bảo mật app sâu hơn."
    },
    {
        question: "Thế nào là 'Economies of Scale' trong Cloud Provider?",
        options: ["Nhà cung cấp mua số lượng lớn phần cứng nên có giá rẻ hơn khách hàng tự mua", "Cloud rất đắt", "Tiết kiệm bằng cách tắt server", "Dùng server cũ"],
        correct: 0,
        explanation: "Quy mô lớn giúp nhà cung cấp giảm chi phí biên."
    },
    {
        question: "Trong kịch bản Startup E-commerce, tại sao SaaS/PaaS thường được ưu tiên hơn IaaS?",
        options: ["Để kiểm soát Kernel", "Để đưa sản phẩm ra thị trường nhanh nhất (Time-to-market)", "Để tiết kiệm băng thông", "Để thuê ít nhân viên hơn"],
        correct: 1,
        explanation: "Startup cần tập trung vào nghiệp vụ bán hàng thay vì quản trị hạ tầng."
    },
    {
        question: "Rủi ro 'API lock-in' có nghĩa là:",
        options: ["API bị lỗi", "Ứng dụng viết dựa trên API độc quyền không thể chạy trên đám mây khác", "Mất API key", "API chạy chậm"],
        correct: 1,
        explanation: "Sử dụng các dịch vụ đặc thù (như DynamoDB) khiến code bị 'khóa' vào AWS."
    },
    {
        question: "Trách nhiệm quản lý 'Security & IAM' trong IaaS chủ yếu thuộc về:",
        options: ["Nhà cung cấp", "Khách hàng", "Chia sẻ công bằng 50/50", "Bên thứ ba"],
        correct: 1,
        explanation: "Khách hàng quản lý IAM policy và cấu hình bảo mật ứng dụng."
    },
    {
        question: "Tại sao Private Cloud lại phù hợp cho ngành Y tế hoặc Tài chính?",
        options: ["Dễ sử dụng", "Kiểm soát tối đa bảo mật và tuân thủ dữ liệu nhạy cảm", "Rẻ hơn Public Cloud", "Luôn nhanh hơn"],
        correct: 1,
        explanation: "Tính biệt lập (Isolation) cao giúp đáp ứng các tiêu chuẩn khắt khe."
    },
    {
        question: "Khái niệm 'Shared Responsibility' trong SaaS: Ai quản lý 'Ứng dụng'?",
        options: ["Khách hàng", "Nhà cung cấp", "Cả hai", "Bên thứ ba"],
        correct: 1,
        explanation: "Nhà cung cấp SaaS quản lý ứng dụng, khách hàng chỉ quản lý cấu hình và dữ liệu bên trong."
    },
    {
        question: "AWS QuickSight hoặc Microsoft Power BI thuộc mô hình dịch vụ nào?",
        options: ["IaaS", "PaaS", "SaaS (về mặt Analytics)", "Serverless"],
        correct: 2,
        explanation: "Đây là các phần mềm cung cấp tính năng phân tích dưới dạng dịch vụ."
    },
    {
        question: "Đâu là một ví dụ về 'Anti-pattern' (Phản mẫu) khi lên mây?",
        options: ["Dùng IaC", "Lift-and-Shift lên PaaS mà không thay đổi cấu trúc ứng dụng", "Bật MFA", "Gắn tag tài nguyên"],
        correct: 1,
        explanation: "PaaS yêu cầu ứng dụng phải tương thích với runtime, bê nguyên xi app cũ lên thường gây lỗi hoặc kém hiệu quả."
    },
    {
        question: "Chi phí 'Egress' trong đám mây là gì?",
        options: ["Phí nạp dữ liệu vào", "Phí truyền dữ liệu ra khỏi đám mây của nhà cung cấp", "Phí lưu trữ", "Phí CPU"],
        correct: 1,
        explanation: "Hầu hết các nhà cung cấp miễn phí Inbound nhưng tính phí Outbound (Egress)."
    },
    {
        question: "Kỹ năng cần thiết của đội ngũ khi dùng IaaS là:",
        options: ["Chỉ cần biết dùng web", "Kỹ năng OS, Networking, Security và Automation", "Chỉ cần biết code Python", "Kỹ năng thiết kế đồ họa"],
        correct: 1,
        explanation: "IaaS đòi hỏi kỹ năng quản trị hệ thống sâu."
    },
    {
        question: "Trong mô hình SaaS, khách hàng có thể thực hiện 'Forensics' (pháp y số) như thế nào?",
        options: ["Truy cập trực tiếp ổ đĩa vật lý", "Hạn chế, phụ thuộc vào API hoặc log xuất ra từ nhà cung cấp", "Toàn quyền truy cập hạ tầng", "Không thể thực hiện"],
        correct: 1,
        explanation: "SaaS giấu lớp hạ tầng nên việc điều tra phụ thuộc vào sự hỗ trợ của nhà cung cấp."
    },
    {
        question: "Tại sao nên có 'Exit Strategy' (Chiến lược thoát)?",
        options: ["Để tiết kiệm tiền", "Để có thể chuyển đổi sang nhà cung cấp khác khi cần mà không bị gián đoạn", "Để tắt cloud", "Để sa thải nhân viên"],
        correct: 1,
        explanation: "Phòng ngừa trường hợp nhà cung cấp tăng giá hoặc ngừng dịch vụ."
    },
    {
        question: "Dịch vụ nào của AWS thuộc mô hình PaaS?",
        options: ["EC2", "S3", "Elastic Beanstalk", "VPC"],
        correct: 2,
        explanation: "Elastic Beanstalk giúp deploy app mà không cần quản lý server/OS."
    },
    {
        question: "Đặc điểm 'Multi-tenancy' của SaaS có nghĩa là:",
        options: ["Một khách hàng dùng nhiều cloud", "Nhiều khách hàng dùng chung một phiên bản ứng dụng và hạ tầng", "Khách hàng có nhiều nhân viên", "Ứng dụng chạy trên nhiều vùng"],
        correct: 1,
        explanation: "Nhiều tenant cùng chia sẻ tài nguyên giúp tối ưu chi phí."
    },
    {
        question: "Vai trò của 'DPA' (Data Processing Addendum) là gì?",
        options: ["Một loại code", "Thỏa thuận pháp lý về cách nhà cung cấp xử lý dữ liệu của khách hàng", "Phí dịch vụ", "Một loại database"],
        correct: 1,
        explanation: "Đảm bảo tuân thủ các luật bảo vệ dữ liệu như GDPR."
    },
    {
        question: "Mô hình 'Serverless' thường được xếp vào nhóm nào?",
        options: ["IaaS", "SaaS", "PaaS (cấp độ cao)", "Private Cloud"],
        correct: 2,
        explanation: "Serverless (như Lambda) giúp developer chỉ quan tâm đến code."
    },
    {
        question: "Thế nào là 'Rightsizing'?",
        options: ["Mua server lớn nhất", "Điều chỉnh tài nguyên (CPU/RAM) phù hợp với thực tế sử dụng để tránh lãng phí", "Mua thêm ổ cứng", "Tăng tốc độ mạng"],
        correct: 1,
        explanation: "Chọn kích cỡ đúng giúp tiết kiệm chi phí tối đa."
    },
    {
        question: "Trong STRIDE, 'Repudiation' (Chối bỏ) được khắc phục bằng cách nào?",
        options: ["Mật khẩu mạnh", "Hệ thống Logging và Audit ghi nhận mọi hành vi", "Mã hóa dữ liệu", "Tăng số lượng server"],
        correct: 1,
        explanation: "Audit trail chứng minh được ai đã làm gì, không thể chối bỏ."
    },
    {
        question: "Dịch vụ Datadog (Giám sát) được tích hợp vào VM thông qua cơ chế nào?",
        options: ["Chạy trực tiếp trên cloud", "Cài đặt Agent và dùng API Key", "Dùng dây cáp", "Không cần cài đặt"],
        correct: 1,
        explanation: "Agent thu thập metric từ VM và gửi về nền tảng SaaS của Datadog."
    },
    {
        question: "Ưu điểm lớn nhất của Hybrid Cloud so với Public Cloud thuần túy là gì?",
        options: ["Luôn rẻ hơn", "Linh hoạt trong việc đặt workload (workload placement) theo yêu cầu bảo mật", "Dễ quản lý hơn", "Không cần internet"],
        correct: 1,
        explanation: "Dữ liệu nhạy cảm để ở Private, app frontend để ở Public."
    },
    {
        question: "Hiện tượng 'VM Sprawl' trong IaaS có nghĩa là:",
        options: ["Máy ảo chạy quá nhanh", "Quá nhiều máy ảo được tạo ra mà không có mục đích rõ ràng hoặc không được quản lý", "Máy ảo bị virus", "Máy ảo không có IP"],
        correct: 1,
        explanation: "Sự bùng nổ số lượng VM không kiểm soát dẫn đến lãng phí chi phí."
    },
    {
        question: "Sử dụng 'Reserved Instances' (RI) giúp:",
        options: ["Tăng tốc độ máy", "Giảm chi phí đáng kể khi cam kết sử dụng lâu dài (1-3 năm)", "Bảo mật hơn", "Máy không bao giờ tắt"],
        correct: 1,
        explanation: "Cam kết sử dụng giúp nhà cung cấp lập kế hoạch tốt hơn nên họ giảm giá cho khách hàng."
    },
    {
        question: "Mô hình IaaS của OpenStack bao gồm các thành phần cốt lõi nào?",
        options: ["Nova, Neutron, Cinder", "Gmail, Drive", "Kernel, Shell", "Windows, Linux"],
        correct: 0,
        explanation: "Nova (Compute), Neutron (Network), Cinder (Block Storage)."
    },
    {
        question: "Rủi ro 'Elevation of Privilege' (EoP) trong SaaS thường do:",
        options: ["Cấu hình quyền (RBAC) quá rộng hoặc sai sót", "Thiếu RAM", "Lỗi mạng", "Dùng server cũ"],
        correct: 0,
        explanation: "Trao quyền admin cho người không cần thiết dẫn đến nguy cơ leo thang đặc quyền."
    },
    {
        question: "Tại sao 'Lock-in mù quáng' là một nguy cơ?",
        options: ["Vì cloud rất an toàn", "Vì khi cần rời đi, chi phí và công sức chuyển đổi có thể cực kỳ lớn", "Vì không tốn tiền", "Vì cloud luôn rẻ"],
        correct: 1,
        explanation: "Phụ thuộc hoàn toàn vào một bên khiến doanh nghiệp mất đi sự chủ động."
    },
    {
        question: "Dịch vụ AWS Lambda thuộc mô hình nào?",
        options: ["IaaS", "SaaS", "Function-as-a-Service (FaaS)", "Private Cloud"],
        correct: 2,
        explanation: "FaaS là một dạng con của PaaS tập trung vào thực thi code theo sự kiện."
    },
    {
        question: "Mục tiêu của trụ cột 'Cost Optimization' là gì?",
        options: ["Tiết kiệm tiền bằng mọi giá", "Đảm bảo doanh nghiệp đạt được mục tiêu kinh doanh với chi phí thấp nhất", "Không mua server", "Dùng server miễn phí"],
        correct: 1,
        explanation: "Tối ưu hóa chứ không phải chỉ là cắt giảm."
    }
];

// --- CHƯƠNG 3: VIRTUAL MACHINE TECHNOLOGY (67-100) ---
const securityCh3Questions = [
    {
        question: "Hypervisor loại 1 (Bare-metal) là gì?",
        options: ["Chạy trên một hệ điều hành chủ", "Chạy trực tiếp trên phần cứng máy chủ", "Là một phần mềm Office", "Dành cho máy tính cá nhân"],
        correct: 1,
        explanation: "Nó tương tác trực tiếp với phần cứng để quản lý VM."
    },
    {
        question: "KVM trong Linux được coi là Hypervisor loại 1 vì:",
        options: ["Nó rất nhanh", "Nó là một module tích hợp trực tiếp vào nhân hệ điều hành (Kernel module)", "Nó miễn phí", "Nó do Google viết"],
        correct: 1,
        explanation: "Khi load module kvm, nhân Linux đóng vai trò như một Hypervisor."
    },
    {
        question: "Sự khác biệt chính giữa Hypervisor loại 1 và loại 2 là:",
        options: ["Loại 1 chạy trên Host OS, loại 2 chạy trên Hardware", "Loại 1 chạy trên Hardware, loại 2 chạy trên Host OS", "Loại 1 chậm hơn loại 2", "Không có sự khác biệt"],
        correct: 1,
        explanation: "Vị trí cài đặt quyết định hiệu năng và độ phức tạp quản lý."
    },
    {
        question: "Kỹ thuật 'vCPU Pinning' giúp gì cho hiệu năng?",
        options: ["Giảm dung lượng RAM", "Gán cố định vCPU vào pCPU vật lý để tránh độ trễ do lập lịch", "Tăng tốc độ ổ cứng", "Tăng cường bảo mật"],
        correct: 1,
        explanation: "Giúp workload tránh bị jitter do CPU phải nhảy giữa các core."
    },
    {
        question: "Thế nào là 'CPU Overcommit'?",
        options: ["Cấp phát số lượng vCPU nhiều hơn số lượng pCPU vật lý thực có", "Không dùng CPU", "Mua thêm CPU", "Ghim CPU"],
        correct: 0,
        explanation: "Giả định các VM không bao giờ chạy hết 100% công suất cùng lúc."
    },
    {
        question: "Trong ảo hóa, 'Ballooning' được dùng để làm gì?",
        options: ["Tăng kích thước máy ảo", "Thu hồi bộ nhớ từ máy ảo khách để trả lại cho host", "Nén ổ đĩa ảo", "Sao lưu dữ liệu"],
        correct: 1,
        explanation: "Hypervisor 'bơm' một bong bóng bên trong guest để ép guest giải phóng RAM."
    },
    {
        question: "Công nghệ KSM (Kernel Same-page Merging) giúp tiết kiệm tài nguyên gì?",
        options: ["CPU", "Bộ nhớ RAM", "Ổ cứng", "Băng thông mạng"],
        correct: 1,
        explanation: "Hợp nhất các trang bộ nhớ giống hệt nhau giữa các máy ảo khác nhau."
    },
    {
        question: "Kiến trúc NUMA (Non-Uniform Memory Access) có đặc điểm:",
        options: ["Tốc độ truy cập RAM là như nhau từ mọi CPU", "Mỗi CPU socket có vùng bộ nhớ cục bộ (node) riêng", "Chỉ có 1 socket CPU", "Dùng RAM chung qua mạng"],
        correct: 1,
        explanation: "Truy cập local node nhanh hơn remote node."
    },
    {
        question: "Tại sao nên dùng 'Hugepages' cho các ứng dụng Database?",
        options: ["Để lưu nhiều dữ liệu hơn", "Giảm TLB miss bằng cách dùng các trang bộ nhớ lớn (2MB/1GB)", "Để RAM bền hơn", "Để bảo mật Database"],
        correct: 1,
        explanation: "Giảm overhead quản lý bảng phân trang bộ nhớ."
    },
    {
        question: "Ảo hóa bán phần (Paravirtualization - virtio) yêu cầu điều gì?",
        options: ["Phần cứng phải cực mạnh", "Hệ điều hành khách (Guest OS) phải có driver hỗ trợ nhận biết môi trường ảo hóa", "Không cần driver", "Chỉ chạy trên Windows"],
        correct: 1,
        explanation: "Guest OS 'biết' mình đang là máy ảo nên cộng tác với Hypervisor tốt hơn."
    },
    {
        question: "Công nghệ SR-IOV mang lại hiệu năng mạng gần như máy thật nhờ:",
        options: ["Dùng cáp quang", "Gán trực tiếp thiết bị (VF) cho máy ảo, bỏ qua lớp giả lập của Hypervisor", "Dùng nhiều card mạng", "Dùng IP tĩnh"],
        correct: 1,
        explanation: "Nó tách card mạng vật lý thành các phân vùng ảo và gán thẳng vào VM."
    },
    {
        question: "Định dạng ảnh đĩa 'qcow2' có ưu điểm gì so với 'raw'?",
        options: ["Nhanh hơn raw", "Hỗ trợ cấp phát mỏng (thin provisioning) và Snapshot", "Kích thước luôn lớn hơn", "Không cần nén"],
        correct: 1,
        explanation: "qcow2 linh hoạt và tiết kiệm dung lượng hơn nhờ cơ chế Copy-on-Write."
    },
    {
        question: "Vai trò của 'cloud-init' trong khởi tạo VM là:",
        options: ["Để tắt máy", "Cấu hình tự động hostname, SSH keys, network... khi VM boot lần đầu", "Làm sạch ổ đĩa", "Kiểm tra lỗi RAM"],
        correct: 1,
        explanation: "Cloud-init đọc metadata để tự động cấu hình môi trường khách."
    },
    {
        question: "Phương thức 'Live Migration - Post-copy' hoạt động thế nào?",
        options: ["Copy hết RAM rồi mới chuyển VM", "Chuyển VM sang host mới ngay lập tức, sau đó load page bộ nhớ từ xa khi cần", "Tắt máy rồi chuyển", "Chỉ chuyển ổ đĩa"],
        correct: 1,
        explanation: "Post-copy nhanh hơn nhưng rủi ro cao nếu mạng gặp sự cố giữa chừng."
    },
    {
        question: "Thế nào là 'Emulator Thread Isolation'?",
        options: ["Cô lập virus", "Tách các luồng I/O (emulator threads) sang các core CPU riêng để không làm gián đoạn workload chính", "Không cho VM dùng internet", "Gỡ cài đặt QEMU"],
        correct: 1,
        explanation: "Giúp giảm jitter cho các ứng dụng thời gian thực."
    },
    {
        question: "Trong OpenStack, dịch vụ nào quản lý ảnh máy ảo?",
        options: ["Nova", "Cinder", "Glance", "Neutron"],
        correct: 2,
        explanation: "Glance là Image Service."
    },
    {
        question: "Ảnh chụp trạng thái 'Crash-consistent' có đặc điểm gì?",
        options: ["Mọi dữ liệu trong RAM được lưu lại", "Dữ liệu trên đĩa giống như khi máy bị mất điện đột ngột", "Ứng dụng được thông báo trước khi chụp", "An toàn tuyệt đối"],
        correct: 1,
        explanation: "Không đảm bảo dữ liệu trong RAM hoặc cache ứng dụng đã được ghi xuống đĩa."
    },
    {
        question: "Tại sao 'Live Migration' yêu cầu Shared Storage (Lưu trữ dùng chung)?",
        options: ["Để tiết kiệm tiền", "Để cả host nguồn và đích đều truy cập được cùng một file ổ đĩa ảo", "Để tăng tốc độ copy", "Không bắt buộc"],
        correct: 1,
        explanation: "Nếu không có shared storage, phải dùng block-migration vốn chậm hơn nhiều."
    },
    {
        question: "Hiện tượng 'Noisy Neighbor' (Láng giềng ồn ào) xảy ra khi:",
        options: ["Admin nói chuyện to", "Một VM chiếm dụng hết băng thông I/O hoặc CPU của host", "Máy ảo bị hỏng loa", "Ổ cứng bị kêu"],
        correct: 1,
        explanation: "Gây ảnh hưởng tiêu cực đến hiệu năng của các VM khác trên cùng host."
    },
    {
        question: "Tại sao cần 'Image Signing' (Ký số ảnh)?",
        options: ["Để làm đẹp ảnh", "Để xác thực nguồn gốc và đảm bảo ảnh không bị thay đổi trái phép", "Để nén ảnh", "Để chuyển định dạng ảnh"],
        correct: 1,
        explanation: "Đảm bảo tính toàn vẹn (Integrity) của hệ thống từ lúc build."
    },
    {
        question: "Cơ chế 'Auto-converge' trong Live Migration dùng để làm gì?",
        options: ["Tăng tốc mạng", "Giảm tốc độ CPU của VM nguồn để việc đồng bộ bộ nhớ kịp hoàn tất", "Tự động tắt máy", "Xóa máy ảo cũ"],
        correct: 1,
        explanation: "Dùng khi VM thay đổi dữ liệu trong RAM nhanh hơn tốc độ copy qua mạng."
    },
    {
        question: "QoS (Quality of Service) trong lưu trữ đám mây giúp giới hạn chỉ số nào?",
        options: ["Màu sắc máy ảo", "IOPS và Băng thông (MB/s)", "Số lượng người dùng", "Kích thước màn hình"],
        correct: 1,
        explanation: "Ngăn chặn một VM độc chiếm tài nguyên lưu trữ."
    },
    {
        question: "Mô hình 'Nested Virtualization' là gì?",
        options: ["Xóa ảo hóa", "Chạy một Hypervisor bên trong một máy ảo", "Dùng nhiều máy ảo", "Ảo hóa mạng"],
        correct: 1,
        explanation: "Cho phép cài đặt KVM/ESXi bên trong một VM (phục vụ lab/testing)."
    },
    {
        question: "Trong cấu hình OpenStack Flavor, `hw:numa_nodes=1` có ý nghĩa gì?",
        options: ["Dùng 1 CPU", "Ép máy ảo phải nằm gọn trong duy nhất một NUMA node", "Dùng 1 RAM", "Không dùng NUMA"],
        correct: 1,
        explanation: "Tối ưu hóa hiệu năng truy cập bộ nhớ."
    },
    {
        question: "Rủi ro bảo mật 'VM Escape' là gì?",
        options: ["Máy ảo bị tắt", "Kẻ tấn công từ máy ảo chiếm được quyền điều khiển hệ điều hành chủ (Host)", "Máy ảo chạy ra ngoài mạng", "Mất mật khẩu máy ảo"],
        correct: 1,
        explanation: "Đây là lỗ hổng phá vỡ ranh giới cách ly của Hypervisor."
    },
    {
        question: "Thế nào là 'Thin Provisioning'?",
        options: ["Cấp phát đĩa mỏng", "Chỉ thực sự chiếm dung lượng đĩa vật lý khi có dữ liệu được ghi vào", "Dùng ít đĩa", "Xóa đĩa cũ"],
        correct: 1,
        explanation: "Giúp tiết kiệm không gian lưu trữ thực tế."
    },
    {
        question: "Công nghệ 'Confidential Computing' (như Intel TDX) bảo vệ dữ liệu ở trạng thái nào?",
        options: ["Data at rest (Lưu trữ)", "Data in transit (Truyền tải)", "Data in use (Đang xử lý trong RAM)", "Mọi trạng thái"],
        correct: 2,
        explanation: "Mã hóa bộ nhớ để ngay cả Hypervisor cũng không đọc được dữ liệu của VM."
    },
    {
        question: "Tại sao nên tắt 'Ballooning' và 'KSM' cho các workload Real-time?",
        options: ["Để tiết kiệm điện", "Để loại bỏ độ trễ (jitter) do việc thu hồi/hợp nhất bộ nhớ gây ra", "Để máy chạy nhanh hơn", "Vì chúng không hoạt động"],
        correct: 1,
        explanation: "Các cơ chế động này gây ra sự không ổn định về thời gian xử lý."
    },
    {
        question: "Thành phần 'Barbican' trong OpenStack dùng để làm gì?",
        options: ["Quản lý mạng", "Quản lý khóa (Key Management) và các bí mật (Secrets)", "Quản lý ổ đĩa", "Quản lý tài khoản"],
        correct: 1,
        explanation: "Lưu trữ chứng chỉ số, mật mã dùng cho mã hóa/ký số."
    },
    {
        question: "Lệnh `virsh vcpupin` trong KVM dùng để:",
        options: ["Xóa CPU", "Ghim vCPU vào core vật lý", "Tạo CPU mới", "Kiểm tra nhiệt độ CPU"],
        correct: 1,
        explanation: "Đây là công cụ CLI để thực hiện pinning thủ công."
    },
    {
        question: "Tại sao cần 'Metadata Service' (như 169.254.169.254)?",
        options: ["Để xem phim", "Cung cấp thông tin cấu hình cho VM trong quá trình runtime", "Để truy cập internet", "Để chat với admin"],
        correct: 1,
        explanation: "VM gọi vào đây để lấy các thông số như IP, SSH keys, user-data."
    },
    {
        question: "Rủi ro khi dùng 'host-passthrough' cho CPU model là gì?",
        options: ["Hiệu năng kém", "Khó khăn trong Live Migration do yêu cầu CPU host đích phải giống hệt host nguồn", "Không bảo mật", "Tốn RAM"],
        correct: 1,
        explanation: "Passthrough mang toàn bộ tập lệnh CPU vào VM nên đòi hỏi tính tương thích phần cứng tuyệt đối."
    },
    {
        question: "Ảo hóa mạng 'virtio-net' hỗ trợ 'Multiqueue' nhằm mục đích:",
        options: ["Dùng nhiều card mạng", "Cho phép xử lý gói tin mạng song song trên nhiều vCPU", "Tăng số lượng IP", "Bảo mật hơn"],
        correct: 1,
        explanation: "Giúp tăng băng thông mạng cho các VM có lưu lượng lớn."
    },
    {
        question: "Trong Ansible, module nào dùng để quản lý máy ảo OpenStack?",
        options: ["os_server", "yum", "copy", "service"],
        correct: 0,
        explanation: "os_server (nay thuộc openstack.cloud.server) là module chính để provisioning VM."
    }
];

// --- CHƯƠNG 4: CƠ SỞ VỀ MẠNG ẢO (VIRTUAL NETWORKS) (101-150) ---
const securityCh4Questions = [
    {
        question: "Mạng Underlay trong trung tâm dữ liệu đám mây thường là mạng:",
        options: ["Mạng logic được tạo ra bởi phần mềm.", "Hạ tầng mạng vật lý bao gồm switch, router và cáp quang.", "Mạng chạy bên trong hệ điều hành máy ảo.", "Mạng dùng để lưu trữ dữ liệu database."],
        correct: 1,
        explanation: "Mạng Underlay là hạ tầng vật lý cung cấp kết nối IP cơ bản."
    },
    {
        question: "Đặc điểm chính của mạng Overlay là gì?",
        options: ["Sử dụng các switch vật lý để phân tách traffic.", "Tạo ra các mạng logic độc lập chạy phía trên hạ tầng Underlay.", "Không yêu cầu kết nối IP giữa các node vật lý.", "Chỉ hỗ trợ tối đa 4096 mạng ảo."],
        correct: 1,
        explanation: "Overlay tạo ra các mạng logic (VXLAN, Geneve) tách biệt hoàn toàn với Underlay."
    },
    {
        question: "Kỹ thuật nào được sử dụng để chuyển tải gói tin Overlay qua mạng Underlay?",
        options: ["Nén dữ liệu (Compression).", "Đóng gói (Encapsulation).", "Phân mảnh (Fragmentation).", "Định tuyến tĩnh (Static Routing)."],
        correct: 1,
        explanation: "Đóng gói (Encapsulation) bao bọc gói tin gốc bên trong một header IP/UDP khác."
    },
    {
        question: "Trong mô hình Leaf-Spine của Underlay, thiết bị nào kết nối trực tiếp với các máy chủ vật lý?",
        options: ["Spine switch.", "Leaf switch.", "Core router.", "Firewall biên."],
        correct: 1,
        explanation: "Leaf switch kết nối trực tiếp với máy chủ, Spine switch kết nối các Leaf switch với nhau."
    },
    {
        question: "Mục tiêu của việc tách biệt Underlay và Overlay là gì?",
        options: ["Để tăng tốc độ phần cứng.", "Tách biệt địa chỉ mạng của khách hàng khỏi cấu trúc mạng vật lý.", "Giảm số lượng card mạng cần thiết.", "Thay thế hoàn toàn giao thức TCP/IP."],
        correct: 1,
        explanation: "Giúp địa chỉ IP của khách hàng không bị giới hạn bởi sơ đồ IP của hạ tầng vật lý."
    },
    {
        question: "VNI (Virtual Network Identifier) trong VXLAN có độ dài bao nhiêu bit?",
        options: ["12 bit.", "24 bit.", "32 bit.", "48 bit."],
        correct: 1,
        explanation: "VNI dài 24 bit, cho phép tạo ra hơn 16 triệu mạng ảo."
    },
    {
        question: "VXLAN cho phép tạo ra tối đa khoảng bao nhiêu mạng ảo?",
        options: ["4,096.", "65,536.", "16 triệu.", "4 tỷ."],
        correct: 2,
        explanation: "Với 24 bit, VXLAN hỗ trợ 2^24 (~16,7 triệu) mạng ảo."
    },
    {
        question: "Giao thức đóng gói nào sau đây là chuẩn IETF (RFC 8926) hỗ trợ mở rộng metadata linh hoạt?",
        options: ["VXLAN.", "NVGRE.", "Geneve.", "GRE."],
        correct: 2,
        explanation: "Geneve là chuẩn mới linh hoạt hơn VXLAN, cho phép mang thêm metadata."
    },
    {
        question: "Cổng UDP mặc định dành cho lưu lượng VXLAN là:",
        options: ["4789.", "6081.", "8080.", "443."],
        correct: 0,
        explanation: "VXLAN sử dụng cổng UDP 4789."
    },
    {
        question: "Giao thức Geneve sử dụng cổng UDP mặc định nào?",
        options: ["4789.", "6081.", "22.", "53."],
        correct: 1,
        explanation: "Geneve sử dụng cổng UDP 6081."
    },
    {
        question: "Lưu lượng di chuyển giữa các máy ảo trong cùng một trung tâm dữ liệu được gọi là:",
        options: ["North-South traffic.", "East-West traffic.", "External traffic.", "Management traffic."],
        correct: 1,
        explanation: "East-West là lưu lượng nội bộ giữa các server/VM trong trung tâm dữ liệu."
    },
    {
        question: "Lưu lượng đi từ đám mây ra ngoài Internet được gọi là:",
        options: ["East-West.", "North-South.", "Loopback.", "Local-only."],
        correct: 1,
        explanation: "North-South là lưu lượng giữa đám mây và mạng bên ngoài/Internet."
    },
    {
        question: "Một gói tin Overlay khi đi qua Underlay sẽ có cấu trúc như thế nào?",
        options: ["Bị cắt bỏ header cũ.", " Được bao bọc bởi một Outer IP header và một UDP header.", "Chỉ thay đổi địa chỉ MAC nguồn.", "Được mã hóa và gửi qua FTP."],
        correct: 1,
        explanation: "Đóng gói thêm header mới để định tuyến qua hạ tầng Underlay."
    },
    {
        question: "Tại giờ mạng Underlay hiện đại thường sử dụng định tuyến L3 thay vì L2?",
        options: ["Để hỗ trợ giao thức STP tốt hơn.", "Để loại bỏ các vấn đề về Broadcast storm và tối ưu hóa ECMP.", "Vì L3 rẻ hơn L2.", "Để máy ảo chạy nhanh hơn."],
        correct: 1,
        explanation: "L3 fabric giúp mạng ổn định hơn, tránh vòng lặp L2 và tận dụng tối đa băng thông."
    },
    {
        question: "Khái niệm 'Jumbo Frames' trong mạng Underlay có ý nghĩa gì đối với mạng ảo?",
        options: ["Để máy chủ trông to hơn.", "Cung cấp khoảng trống (headroom) cho header đóng gói mà không phải phân mảnh.", "Để tăng tốc độ CPU.", "Chỉ dùng cho việc sao lưu dữ liệu."],
        correct: 1,
        explanation: "Giúp tránh phân mảnh khi thêm header VXLAN (50 bytes) vào gói tin Ethernet chuẩn (1500 bytes)."
    },
    {
        question: "vNIC (Virtual Network Interface Card) là:",
        options: ["Card mạng vật lý trên server.", "Card mạng ảo của máy ảo kết nối vào switch ảo.", "Một loại phần mềm antivirus.", "Một cổng trên router vật lý."],
        correct: 1,
        explanation: "Máy ảo giao tiếp với mạng thông qua vNIC."
    },
    {
        question: "Cơ chế virtio giúp tối ưu hóa hiệu năng mạng máy ảo bằng cách nào?",
        options: ["Tự động mã hóa gói tin.", "Sử dụng driver ảo hóa bán phần (paravirtualization) để giảm overhead.", "Thay thế hoàn toàn card mạng vật lý.", "Tăng kích thước RAM của máy ảo."],
        correct: 1,
        explanation: "Virtio giảm thiểu việc giả lập phần cứng phức tạp, tăng tốc độ I/O."
    },
    {
        question: "Lợi ích lớn nhất của SR-IOV là gì?",
        options: ["Hỗ trợ Live Migration tốt nhất.", "Gán trực tiếp tài nguyên phần cứng (VF) cho VM để đạt hiệu năng gần như máy thật.", "Dễ dàng cấu hình bằng phần mềm.", "Tiết kiệm băng thông Internet."],
        correct: 1,
        explanation: "SR-IOV cho phép VM truy cập trực tiếp phần cứng card mạng mà không qua Hypervisor."
    },
    {
        question: "Điểm hạn chế của SR-IOV trong môi trường đám mây là:",
        options: ["Tốc độ quá chậm.", "Phụ thuộc chặt chẽ vào phần cứng, gây khó khăn cho việc Live Migration.", "Chỉ chạy được trên Windows.", "Không hỗ trợ địa chỉ IPv6."],
        correct: 1,
        explanation: "Do gắn cứng với phần cứng, việc di chuyển VM sang host khác rất phức tạp."
    },
    {
        question: "Trong OpenStack Neutron, 'Port' đại diện cho điều gì?",
        options: ["Một cổng vật lý trên switch ToR.", "Điểm neo cho vNIC của VM, nơi gán địa chỉ IP, MAC và Security Group.", "Một phần mềm định tuyến.", "Một dải địa chỉ IP."],
        correct: 1,
        explanation: "Port là thực thể logic chứa cấu hình mạng của một thiết bị ảo."
    },
    {
        question: "Security Group (SG) hoạt động ở lớp nào của mô hình OSI?",
        options: ["Lớp 1.", "Lớp 2.", "Lớp 3 và Lớp 4 (IP và Port/Protocol).", "Lớp 7."],
        correct: 2,
        explanation: "SG lọc lưu lượng dựa trên địa chỉ IP, giao thức (TCP/UDP/ICMP) và cổng."
    },
    {
        question: "Security Group là 'Stateful', điều này có nghĩa là:",
        options: ["Bạn phải mở luật cho cả hai chiều Inbound và Outbound.", "Nếu luật chiều đi được cho phép, chiều về tương ứng tự động được chấp nhận.", "Nó chỉ hoạt động tại một tiểu bang nhất định.", "Nó không bao giờ thay đổi trạng thái."],
        correct: 1,
        explanation: "SG tự động quản lý trạng thái kết nối, không cần mở luật chiều về thủ công."
    },
    {
        question: "Network ACL (NACL) trong AWS khác SG ở điểm nào?",
        options: ["NACL áp dụng cho instance, SG áp dụng cho subnet.", "NACL là stateless, SG là stateful.", "NACL chỉ chặn được IP, SG chỉ chặn được Port.", "Không có sự khác biệt."],
        correct: 1,
        explanation: "NACL yêu cầu cấu hình luật cho cả hai chiều một cách minh bạch."
    },
    {
        question: " 'Anti-spoofing' trong mạng ảo giúp ngăn chặn hành vi:",
        options: ["Máy ảo gửi thư rác.", "Máy ảo giả mạo địa chỉ IP hoặc MAC của một máy khác để đánh cắp dữ liệu.", "Máy ảo truy cập web trái phép.", "Máy ảo tự động tăng cấu hình CPU."],
        correct: 1,
        explanation: "Ngăn chặn tấn công Man-in-the-middle hoặc ARP spoofing trong mạng ảo."
    },
    {
        question: "Để máy ảo trong mạng riêng (Private Subnet) truy cập được Internet, thiết bị nào thường được sử dụng?",
        options: ["Internet Gateway (IGW).", "NAT Gateway (thực hiện SNAT).", "Bridge vật lý.", "Modem ADSL."],
        correct: 1,
        explanation: "NAT Gateway cho phép traffic đi ra nhưng ngăn chặn các kết nối lạ khởi tạo từ bên ngoài."
    },
    {
        question: "Floating IP (trong OpenStack) hoạt động dựa trên cơ chế:",
        options: ["Static Routing.", "DNAT (Destination NAT).", "VPN Tunneling.", "Proxy server."],
        correct: 1,
        explanation: "DNAT ánh xạ IP công khai vào IP nội bộ của máy ảo."
    },
    {
        question: "Mục đích của Floating IP là gì?",
        options: ["Tăng tốc độ download cho máy ảo.", "Cung cấp địa chỉ IP công khai có thể gán linh hoạt vào bất kỳ máy ảo nào.", "Bảo mật dữ liệu trong máy ảo.", "Giảm thiểu số lượng IP nội bộ."],
        correct: 1,
        explanation: "Giúp người dùng truy cập máy ảo từ bên ngoài mà không làm lộ IP nội bộ."
    },
    {
        question: "Trong AWS, địa chỉ IP tĩnh công khai được gọi là:",
        options: ["Public Static IP.", "Elastic IP (EIP).", "Floating IP.", "Dynamic IP."],
        correct: 1,
        explanation: "EIP là địa chỉ IP công khai cố định dành cho tài khoản AWS."
    },
    {
        question: "Khi hai máy ảo nằm ở hai Subnet khác nhau muốn giao tiếp, chúng phải đi qua:",
        options: ["Lớp 2 switch.", "Router ảo (L3 gateway).", "Card màn hình.", "Mạng nội bộ của CPU."],
        correct: 1,
        explanation: "Router ảo thực hiện định tuyến giữa các dải mạng khác nhau."
    },
    {
        question: "DHCP trong đám mây chịu trách nhiệm:",
        options: ["Mã hóa dữ liệu mạng.", "Cấp phát địa chỉ IP, gateway và DNS cho máy ảo một cách tự động.", "Chặn các cuộc tấn công DDoS.", "Quản lý bản quyền phần mềm."],
        correct: 1,
        explanation: "Tự động hóa việc cấu hình mạng cho hàng ngàn máy ảo."
    },
    {
        question: "Cơ chế SLAAC trong IPv6 cho phép máy ảo:",
        options: ["Tự động tạo địa chỉ IP dựa trên Router Advertisement (RA).", "Bắt buộc phải có server DHCPv6.", "Không cần kết nối mạng.", "Tự động cài đặt hệ điều hành."],
        correct: 0,
        explanation: "SLAAC (Stateless Address Autoconfiguration) giúp IPv6 triển khai dễ dàng hơn."
    },
    {
        question: "Tại sao phải cho phép lưu lượng ICMPv6 trong Security Group của mạng IPv6?",
        options: ["Để chơi game online.", "Vì Neighbor Discovery và các chức năng cốt lõi của IPv6 dựa trên ICMPv6.", "Để tăng tốc độ mạng.", "Không bắt buộc."],
        correct: 1,
        explanation: "Nếu chặn ICMPv6 hoàn toàn, mạng IPv6 sẽ không thể hoạt động ổn định."
    },
    {
        question: "Transit Subnet được sử dụng để:",
        options: ["Chứa dữ liệu backup.", "Kết nối giữa các Router/Firewall biên với nhau.", "Cho người dùng truy cập trực tiếp.", "Giảm độ trễ ổ đĩa."],
        correct: 1,
        explanation: "Là mạng trung gian dùng để kết nối các thiết bị mạng lớp trên."
    },
    {
        question: "Trong kiến trúc NSX-T, Geneve sử dụng cổng nào?",
        options: ["4789.", "6081.", "80.", "443."],
        correct: 1,
        explanation: "NSX-T chuẩn hóa sử dụng Geneve qua cổng 6081."
    },
    {
        question: " 'Micro-segmentation' giúp ích gì cho bảo mật đám mây?",
        options: ["Chia nhỏ ổ cứng.", "Kiểm soát lưu lượng East-West đến từng máy ảo lẻ, ngăn chặn tấn công lan tỏa.", "Giảm số lượng switch.", "Làm cho mạng chạy nhanh hơn."],
        correct: 1,
        explanation: "Áp dụng chính sách bảo mật tại từng card mạng đơn lẻ thay vì chỉ tại biên mạng."
    },
    {
        question: "Lệnh Ansible os_network dùng để:",
        options: ["Tạo máy ảo mới.", "Quản lý tài nguyên mạng (Virtual Network) trong OpenStack.", "Cấu hình card đồ họa.", "Gửi email thông báo."],
        correct: 1,
        explanation: "Module os_network quản lý các network Overlay trong OpenStack."
    },
    {
        question: "Để gán Floating IP cho máy ảo qua Ansible, ta dùng module:",
        options: ["os_server.", "os_floating_ip.", "os_network.", "os_image."],
        correct: 1,
        explanation: "os_floating_ip xử lý việc cấp phát và gắn IP vào máy ảo."
    },
    {
        question: "Trong AWS CLI, lệnh nào dùng để tạo một VPC mới?",
        options: ["aws ec2 create-vpc.", "aws vpc create.", "aws network create-vpc.", "aws s3 mb."],
        correct: 1,
        explanation: "Theo tài liệu AWS CLI, vpc nằm dưới namespace ec2: aws ec2 create-vpc."
    },
    {
        question: " 'Metadata service' trên đám mây cung cấp thông tin gì cho máy ảo?",
        options: ["Thông tin cấu hình: hostname, SSH keys, user-data.", "Toàn bộ source code của hệ thống.", "Mật khẩu của tài khoản ngân hàng.", "Dung lượng RAM vật lý còn lại."],
        correct: 0,
        explanation: "Metadata service cho phép VM tự biết cấu hình của mình khi khởi động."
    },
    {
        question: "Địa chỉ IP link-local tiêu chuẩn của dịch vụ Metadata là:",
        options: ["127.0.0.1.", "192.168.1.1.", "169.254.169.254.", "8.8.8.8."],
        correct: 2,
        explanation: "Đây là địa chỉ 'thần thánh' luôn khả dụng bên trong đám mây."
    },
    {
        question: "Khi máy ảo không thể truy cập Internet, bước kiểm tra đầu tiên nên là:",
        options: ["Gọi điện cho nhà cung cấp.", "Kiểm tra xem VM có nhận được IP và gateway chưa.", "Cài đặt lại hệ điều hành.", "Thay switch vật lý."],
        correct: 1,
        explanation: "Xác minh cấu hình mạng cơ bản là ưu tiên hàng đầu."
    },
    {
        question: "Lỗi 'MTU mismatch' thường dẫn đến hiện tượng:",
        options: ["Máy ảo không lên nguồn.", "Các gói tin nhỏ (như ping) chạy được nhưng gói tin lớn (như HTTP) bị treo/drop.", "Sai mật khẩu SSH.", "Màn hình xanh chết chóc."],
        correct: 1,
        explanation: "Gói tin quá lớn bị drop do không thể đi qua hầm (tunnel) VXLAN/Geneve."
    },
    {
        question: "Để kiểm tra MTU tối đa trên đường truyền mà không bị phân mảnh, dùng lệnh:",
        options: ["ping -s 1500.", "ping -M do -s 1472 <IP>.", "traceroute.", "ifconfig."],
        correct: 1,
        explanation: "Lệnh ping với cờ DF (Don't Fragment) giúp tìm ra MTU tối ưu."
    },
    {
        question: "Công cụ nào trong Linux dùng để xem bảng định tuyến của máy ảo?",
        options: ["ls -l.", "ip route hoặc route -n.", "ps aux.", "top."],
        correct: 1,
        explanation: "Lệnh 'ip route' là tiêu chuẩn hiện đại trên Linux."
    },
    {
        question: "Trong OpenStack, 'Neutron-server' đóng vai trò:",
        options: ["Xử lý gói tin thực tế.", "Nhận các yêu cầu API và điều phối cấu hình mạng ảo.", "Lưu trữ file ảnh máy ảo.", "Cấp nguồn cho máy chủ."],
        correct: 1,
        explanation: "Neutron-server là bộ não điều hành lớp mạng ảo."
    },
    {
        question: " 'VXLAN Tunnel End Point' (VTEP) là gì?",
        options: ["Một điểm kết thúc của đường hầm VXLAN, nơi thực hiện đóng/giải mã gói tin.", "Một loại cáp mạng mới.", "Một lệnh trong Linux.", "Tên một hacker."],
        correct: 0,
        explanation: "VTEP có thể là một switch vật lý hoặc một switch ảo trên host."
    },
    {
        question: " 'Config-Drive' là giải pháp thay thế cho Metadata service nhằm:",
        options: ["Tăng dung lượng lưu trữ.", "Tăng tính bảo mật bằng cách gắn cấu hình vào một ổ đĩa ảo thay vì qua mạng.", "Làm cho VM boot nhanh hơn.", "Giảm giá thành dịch vụ."],
        correct: 1,
        explanation: "Giúp VM cấu hình được ngay cả khi chưa có mạng IP."
    },
    {
        question: "Tại sao người ta ưu tiên sử dụng Geneve trong các hệ thống SDN hiện đại (như OVN)?",
        options: ["Vì nó là mã nguồn mở.", "Vì khả năng mang thêm các tùy chọn metadata linh hoạt cho telemetry và bảo mật.", "Vì nó không tốn băng thông.", "Vì nó dễ phát âm hơn VXLAN."],
        correct: 1,
        explanation: "Geneve vượt trội nhờ khả năng mở rộng (Extensibility)."
    },
    {
        question: "Một 'Security Group rule' mặc định trong nhiều nền tảng đám mây khi mới tạo thường:",
        options: ["Cho phép mọi lưu lượng.", "Chặn mọi lưu lượng Inbound (Deny-all by default).", "Chỉ cho phép cổng 80.", "Chỉ cho phép admin truy cập."],
        correct: 1,
        explanation: "Nguyên tắc 'Default Deny' để đảm bảo an toàn tối đa."
    },
    {
        question: " 'OVS-DPDK' giúp ích gì cho mạng ảo hóa?",
        options: ["Tăng dung lượng RAM.", "Tăng tốc độ xử lý gói tin bằng cách đưa việc chuyển mạch ra khỏi nhân Linux vào không gian người dùng (User-space).", "Làm cho server mát hơn.", "Tự động sửa lỗi phần cứng."],
        correct: 1,
        explanation: "DPDK tăng hiệu suất mạng gấp nhiều lần so với kernel bridge truyền thống."
    }
];

// Compatibility alias for existing code
const securityCloudQuestions = [
    ...securityCh1Questions,
    ...securityCh2Questions,
    ...securityCh3Questions,
    ...securityCh4Questions
];
