/* =========================================
   SECURITY CLOUD - QUESTION BANK
   ========================================= */

const securityCloudQuestions = [
    // Cloud Security Fundamentals
    {
        question: "Shared Responsibility Model trong Cloud Security có nghĩa là gì?",
        options: [
            "Cloud provider chịu trách nhiệm toàn bộ bảo mật",
            "Customer chịu trách nhiệm toàn bộ bảo mật",
            "Cloud provider và customer chia sẻ trách nhiệm bảo mật",
            "Không ai chịu trách nhiệm bảo mật"
        ],
        correct: 2,
        explanation: "Shared Responsibility Model: Cloud provider bảo mật hạ tầng (physical, network, hypervisor), customer bảo mật data, applications, OS, access control."
    },
    {
        question: "CIA Triad trong Security bao gồm những yếu tố nào?",
        options: [
            "Cloud, Infrastructure, Application",
            "Confidentiality, Integrity, Availability",
            "Container, Image, API",
            "Compute, Identity, Authentication"
        ],
        correct: 1,
        explanation: "CIA Triad: Confidentiality (bảo mật), Integrity (toàn vẹn dữ liệu), Availability (khả dụng) - 3 trụ cột của Information Security."
    },
    {
        question: "Encryption at Rest có nghĩa là gì?",
        options: [
            "Mã hóa dữ liệu khi truyền qua mạng",
            "Mã hóa dữ liệu khi lưu trữ trên disk/storage",
            "Mã hóa trong quá trình xử lý",
            "Không mã hóa"
        ],
        correct: 1,
        explanation: "Encryption at Rest: mã hóa dữ liệu khi lưu trữ (database, S3, disk) để bảo vệ khỏi truy cập trái phép nếu storage bị đánh cắp."
    },
    {
        question: "Encryption in Transit bảo vệ dữ liệu như thế nào?",
        options: [
            "Mã hóa dữ liệu khi lưu trữ",
            "Mã hóa dữ liệu khi truyền qua mạng (TLS/SSL)",
            "Xóa dữ liệu sau khi truyền",
            "Backup dữ liệu"
        ],
        correct: 1,
        explanation: "Encryption in Transit: mã hóa dữ liệu khi truyền qua mạng bằng TLS/SSL để chống man-in-the-middle attacks."
    },

    // Identity & Access Management (IAM)
    {
        question: "Principle of Least Privilege có nghĩa là gì?",
        options: [
            "Cấp quyền tối đa cho mọi user",
            "Chỉ cấp quyền tối thiểu cần thiết để thực hiện công việc",
            "Không cấp quyền cho ai",
            "Cấp quyền admin cho tất cả"
        ],
        correct: 1,
        explanation: "Principle of Least Privilege: chỉ cấp quyền tối thiểu cần thiết, giảm thiểu rủi ro nếu account bị compromise."
    },
    {
        question: "Multi-Factor Authentication (MFA) là gì?",
        options: [
            "Chỉ dùng password",
            "Yêu cầu 2+ phương thức xác thực (password + OTP/biometric)",
            "Không cần xác thực",
            "Chỉ dùng username"
        ],
        correct: 1,
        explanation: "MFA yêu cầu nhiều yếu tố xác thực: something you know (password), something you have (phone/token), something you are (biometric)."
    },
    {
        question: "Role-Based Access Control (RBAC) hoạt động như thế nào?",
        options: [
            "Cấp quyền dựa trên vai trò (role) của user",
            "Cấp quyền ngẫu nhiên",
            "Không có kiểm soát truy cập",
            "Chỉ admin có quyền"
        ],
        correct: 0,
        explanation: "RBAC: gán quyền cho role (như Developer, Admin), sau đó assign user vào role. Dễ quản lý quyền hơn cấp trực tiếp cho từng user."
    },
    {
        question: "Service Account trong Cloud nên được quản lý như thế nào?",
        options: [
            "Chia sẻ credentials cho nhiều người",
            "Rotate keys định kỳ, áp dụng least privilege, audit logs",
            "Không cần quản lý",
            "Dùng password đơn giản"
        ],
        correct: 1,
        explanation: "Service accounts cần rotate keys thường xuyên, áp dụng least privilege, enable audit logging, và không share credentials."
    },

    // Network Security
    {
        question: "Security Group trong Cloud (AWS/OpenStack) hoạt động ở layer nào?",
        options: [
            "Physical layer",
            "Virtual firewall ở instance level (stateful)",
            "Application layer",
            "Database layer"
        ],
        correct: 1,
        explanation: "Security Group là virtual firewall stateful, kiểm soát inbound/outbound traffic ở instance level dựa trên IP, port, protocol."
    },
    {
        question: "Network ACL (Access Control List) khác Security Group như thế nào?",
        options: [
            "ACL là stateless, Security Group là stateful",
            "ACL chỉ cho inbound",
            "Security Group chỉ cho outbound",
            "Không có sự khác biệt"
        ],
        correct: 0,
        explanation: "Network ACL là stateless (phải define cả inbound và outbound rules), hoạt động ở subnet level. Security Group là stateful."
    },
    {
        question: "VPN (Virtual Private Network) trong Cloud dùng để làm gì?",
        options: [
            "Tăng tốc độ Internet",
            "Tạo kết nối mã hóa an toàn giữa on-premise và cloud",
            "Lưu trữ data",
            "Chạy máy ảo"
        ],
        correct: 1,
        explanation: "VPN tạo tunnel mã hóa để kết nối an toàn giữa on-premise network và cloud VPC, bảo vệ data khi truyền qua Internet."
    },
    {
        question: "DDoS (Distributed Denial of Service) attack là gì?",
        options: [
            "Đánh cắp data",
            "Tấn công từ nhiều nguồn để làm quá tải hệ thống",
            "Mã hóa data",
            "Backup data"
        ],
        correct: 1,
        explanation: "DDoS attack: tấn công từ nhiều máy tính (botnet) để làm quá tải server/network, khiến dịch vụ không khả dụng cho user hợp lệ."
    },

    // Data Security
    {
        question: "Data Loss Prevention (DLP) có mục đích gì?",
        options: [
            "Xóa data tự động",
            "Ngăn chặn data nhạy cảm bị rò rỉ ra ngoài tổ chức",
            "Tăng dung lượng storage",
            "Backup data"
        ],
        correct: 1,
        explanation: "DLP giám sát, phát hiện và ngăn chặn data nhạy cảm (credit card, PII) bị truyền ra ngoài qua email, upload, copy."
    },
    {
        question: "Key Management Service (KMS) trong Cloud làm gì?",
        options: [
            "Quản lý máy chủ",
            "Quản lý encryption keys một cách tập trung và an toàn",
            "Quản lý network",
            "Quản lý user"
        ],
        correct: 1,
        explanation: "KMS quản lý lifecycle của encryption keys (create, rotate, delete), tích hợp với các service để mã hóa data tự động."
    },
    {
        question: "Tokenization trong Data Security có nghĩa là gì?",
        options: [
            "Thay thế data nhạy cảm bằng token không có giá trị",
            "Mã hóa toàn bộ database",
            "Xóa data",
            "Backup data"
        ],
        correct: 0,
        explanation: "Tokenization: thay thế data nhạy cảm (như số thẻ tín dụng) bằng token ngẫu nhiên. Token không có giá trị nếu bị đánh cắp."
    },

    // Compliance & Governance
    {
        question: "GDPR (General Data Protection Regulation) là gì?",
        options: [
            "Công nghệ cloud mới",
            "Quy định bảo vệ dữ liệu cá nhân của EU",
            "Giao thức mạng",
            "Hệ điều hành"
        ],
        correct: 1,
        explanation: "GDPR là quy định của EU về bảo vệ dữ liệu cá nhân, yêu cầu consent, data portability, right to be forgotten."
    },
    {
        question: "Compliance as Code có nghĩa là gì?",
        options: [
            "Viết code để tự động kiểm tra và enforce compliance policies",
            "Không cần tuân thủ quy định",
            "Chỉ kiểm tra thủ công",
            "Xóa audit logs"
        ],
        correct: 0,
        explanation: "Compliance as Code: tự động hóa compliance checks bằng code (InSpec, OPA), đảm bảo infrastructure tuân thủ policies liên tục."
    },
    {
        question: "Audit Logging trong Cloud Security quan trọng vì sao?",
        options: [
            "Tăng performance",
            "Ghi lại mọi hoạt động để phát hiện và điều tra security incidents",
            "Giảm chi phí",
            "Tăng storage"
        ],
        correct: 1,
        explanation: "Audit logs ghi lại who did what, when, where - cần thiết cho incident response, forensics, compliance, và threat detection."
    },

    // Container & Kubernetes Security
    {
        question: "Container Image Scanning dùng để làm gì?",
        options: [
            "Tăng tốc độ container",
            "Quét lỗ hổng bảo mật (vulnerabilities) trong image",
            "Tạo container mới",
            "Xóa container"
        ],
        correct: 1,
        explanation: "Image scanning (Trivy, Clair) phát hiện CVEs và vulnerabilities trong base images và dependencies trước khi deploy."
    },
    {
        question: "Pod Security Policy (PSP) trong Kubernetes làm gì?",
        options: [
            "Tăng số lượng pods",
            "Định nghĩa security constraints cho pods (như không chạy as root)",
            "Xóa pods tự động",
            "Backup pods"
        ],
        correct: 1,
        explanation: "PSP (deprecated, thay bằng Pod Security Standards) định nghĩa security requirements như privileged containers, host networking, runAsUser."
    },
    {
        question: "Network Policy trong Kubernetes có tác dụng gì?",
        options: [
            "Kiểm soát traffic giữa pods (micro-segmentation)",
            "Tăng bandwidth",
            "Tạo load balancer",
            "Backup network config"
        ],
        correct: 0,
        explanation: "Network Policy cho phép define rules để kiểm soát traffic ingress/egress giữa pods, implement zero-trust networking."
    },
    {
        question: "Secrets trong Kubernetes nên được quản lý như thế nào?",
        options: [
            "Lưu trong code",
            "Mã hóa at rest, dùng external secret managers (Vault, AWS Secrets Manager)",
            "Share qua email",
            "Không cần bảo mật"
        ],
        correct: 1,
        explanation: "Secrets nên được mã hóa at rest (etcd encryption), rotate định kỳ, và tốt nhất dùng external secret managers như HashiCorp Vault."
    },

    // Threat Detection & Response
    {
        question: "SIEM (Security Information and Event Management) làm gì?",
        options: [
            "Tạo máy ảo",
            "Thu thập, phân tích logs và events để phát hiện threats",
            "Backup data",
            "Tăng performance"
        ],
        correct: 1,
        explanation: "SIEM (Splunk, ELK) tập trung logs từ nhiều nguồn, correlation analysis để phát hiện security incidents và anomalies."
    },
    {
        question: "Intrusion Detection System (IDS) hoạt động như thế nào?",
        options: [
            "Chặn traffic tự động",
            "Giám sát và cảnh báo về suspicious activities",
            "Tạo firewall rules",
            "Xóa malware"
        ],
        correct: 1,
        explanation: "IDS (như Snort) giám sát network/host traffic, phát hiện patterns của attacks và alert, nhưng không chặn (khác IPS)."
    },
    {
        question: "Incident Response Plan cần bao gồm những gì?",
        options: [
            "Chỉ cần backup",
            "Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned",
            "Chỉ cần antivirus",
            "Không cần plan"
        ],
        correct: 1,
        explanation: "Incident Response theo NIST framework: Preparation → Detection → Containment → Eradication → Recovery → Post-Incident Analysis."
    },

    // Advanced Security Topics
    {
        question: "Zero Trust Security Model dựa trên nguyên tắc nào?",
        options: [
            "Tin tưởng mọi user trong network",
            "Never trust, always verify - xác thực mọi request",
            "Chỉ tin tưởng admin",
            "Không cần xác thực"
        ],
        correct: 1,
        explanation: "Zero Trust: không tin tưởng bất kỳ user/device nào by default, luôn verify identity và context trước khi cấp access."
    },
    {
        question: "Service Mesh (như Istio) cung cấp security features gì?",
        options: [
            "Chỉ load balancing",
            "mTLS (mutual TLS) giữa services, authorization policies, traffic encryption",
            "Chỉ monitoring",
            "Không có security features"
        ],
        correct: 1,
        explanation: "Service Mesh cung cấp mTLS tự động giữa services, fine-grained authorization, traffic encryption, và observability."
    },
    {
        question: "Runtime Security trong containers giám sát điều gì?",
        options: [
            "Chỉ build time",
            "Hành vi của container khi đang chạy để phát hiện anomalies",
            "Chỉ image size",
            "Không giám sát gì"
        ],
        correct: 1,
        explanation: "Runtime security (Falco, Sysdig) giám sát syscalls, process execution, network connections để phát hiện malicious behavior khi container đang chạy."
    },

    // Cloud-Specific Security
    {
        question: "AWS IAM Policy evaluation logic hoạt động như thế nào?",
        options: [
            "Allow luôn thắng",
            "Explicit Deny > Explicit Allow > Default Deny",
            "Default Allow",
            "Random"
        ],
        correct: 1,
        explanation: "IAM Policy evaluation: Explicit Deny luôn thắng, sau đó check Explicit Allow, nếu không có gì thì Default Deny."
    },
    {
        question: "S3 Bucket Policy vs IAM Policy khác nhau như thế nào?",
        options: [
            "Không khác gì",
            "Bucket Policy gắn vào resource (bucket), IAM Policy gắn vào identity (user/role)",
            "Bucket Policy chỉ cho read",
            "IAM Policy chỉ cho write"
        ],
        correct: 1,
        explanation: "Bucket Policy là resource-based (gắn vào S3 bucket), IAM Policy là identity-based (gắn vào user/role). Có thể dùng cả hai."
    },
    {
        question: "CloudTrail trong AWS có tác dụng gì?",
        options: [
            "Tạo EC2 instances",
            "Ghi lại API calls và events cho auditing và compliance",
            "Backup data",
            "Load balancing"
        ],
        correct: 1,
        explanation: "CloudTrail logs mọi API calls trong AWS account, cần thiết cho security auditing, compliance, và incident investigation."
    },

    // Security Best Practices
    {
        question: "Defense in Depth strategy có nghĩa là gì?",
        options: [
            "Chỉ dùng một layer bảo mật",
            "Sử dụng nhiều layers bảo mật chồng lên nhau",
            "Không cần bảo mật",
            "Chỉ dùng firewall"
        ],
        correct: 1,
        explanation: "Defense in Depth: sử dụng nhiều layers bảo mật (network, application, data, identity) để nếu một layer fail, còn layers khác bảo vệ."
    },
    {
        question: "Security Hardening có nghĩa là gì?",
        options: [
            "Tăng performance",
            "Giảm attack surface bằng cách disable unnecessary services, apply patches, configure securely",
            "Tăng storage",
            "Giảm chi phí"
        ],
        correct: 1,
        explanation: "Hardening: disable unused services/ports, remove default accounts, apply security patches, follow CIS Benchmarks để giảm attack surface."
    },
    {
        question: "Patch Management trong Cloud Security quan trọng vì sao?",
        options: [
            "Tăng tốc độ",
            "Cập nhật security patches để fix vulnerabilities và prevent exploits",
            "Giảm chi phí",
            "Không quan trọng"
        ],
        correct: 1,
        explanation: "Patch Management đảm bảo OS, applications, dependencies được update kịp thời để fix known vulnerabilities trước khi bị exploit."
    }
];
