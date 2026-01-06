/* =========================================
   CLOUD COMPUTING - QUESTION BANK
   ========================================= */

const cloudQuestions = [
    // Virtualization & Hypervisors
    {
        question: "Hypervisor là gì?",
        options: [
            "Phần mềm giám sát và quản lý các máy ảo",
            "Phần cứng để chạy máy ảo",
            "Hệ điều hành chạy trên máy ảo",
            "Phần mềm để tạo container"
        ],
        correct: 0,
        explanation: "Hypervisor (Virtual Machine Monitor) là phần mềm cho phép tạo và quản lý các máy ảo, chia sẻ tài nguyên phần cứng cho nhiều hệ điều hành khác nhau."
    },
    {
        question: "Loại Hypervisor nào chạy trực tiếp trên phần cứng (bare-metal)?",
        options: [
            "Type 2 Hypervisor",
            "Type 1 Hypervisor",
            "Type 3 Hypervisor",
            "Container Runtime"
        ],
        correct: 1,
        explanation: "Type 1 Hypervisor (bare-metal) chạy trực tiếp trên phần cứng mà không cần hệ điều hành host. Ví dụ: VMware ESXi, KVM, Xen."
    },
    {
        question: "Đâu là ví dụ của Type 2 Hypervisor?",
        options: [
            "VMware ESXi",
            "KVM",
            "VMware Workstation",
            "Xen"
        ],
        correct: 2,
        explanation: "Type 2 Hypervisor chạy trên một hệ điều hành host. VMware Workstation, VirtualBox là ví dụ điển hình."
    },

    // Cloud Service Models
    {
        question: "IaaS là viết tắt của?",
        options: [
            "Internet as a Service",
            "Infrastructure as a Service",
            "Integration as a Service",
            "Information as a Service"
        ],
        correct: 1,
        explanation: "IaaS (Infrastructure as a Service) cung cấp tài nguyên hạ tầng IT như máy chủ, lưu trữ, mạng theo nhu cầu."
    },
    {
        question: "Trong mô hình Cloud, dịch vụ nào cung cấp môi trường lập trình và deployment?",
        options: [
            "IaaS",
            "PaaS",
            "SaaS",
            "FaaS"
        ],
        correct: 1,
        explanation: "PaaS (Platform as a Service) cung cấp nền tảng phát triển và triển khai ứng dụng mà không cần quản lý hạ tầng. Ví dụ: Google App Engine, Heroku."
    },
    {
        question: "Gmail, Office 365 là ví dụ của mô hình nào?",
        options: [
            "IaaS",
            "PaaS",
            "SaaS",
            "DaaS"
        ],
        correct: 2,
        explanation: "SaaS (Software as a Service) cung cấp ứng dụng hoàn chỉnh qua Internet, người dùng chỉ cần sử dụng mà không cần cài đặt hay quản lý."
    },

    // OpenStack
    {
        question: "OpenStack là gì?",
        options: [
            "Hệ điều hành mã nguồn mở",
            "Nền tảng Cloud Computing mã nguồn mở",
            "Phần mềm container orchestration",
            "Công cụ monitoring"
        ],
        correct: 1,
        explanation: "OpenStack là nền tảng Cloud Computing mã nguồn mở để xây dựng và quản lý private cloud và public cloud."
    },
    {
        question: "Component nào của OpenStack quản lý compute (máy ảo)?",
        options: [
            "Keystone",
            "Nova",
            "Neutron",
            "Cinder"
        ],
        correct: 1,
        explanation: "Nova là compute service của OpenStack, chịu trách nhiệm tạo và quản lý các máy ảo."
    },
    {
        question: "Keystone trong OpenStack có chức năng gì?",
        options: [
            "Quản lý storage",
            "Quản lý network",
            "Identity service (xác thực và phân quyền)",
            "Image service"
        ],
        correct: 2,
        explanation: "Keystone là identity service của OpenStack, cung cấp xác thực, phân quyền và quản lý user, project, role."
    },
    {
        question: "Neutron trong OpenStack quản lý gì?",
        options: [
            "Compute resources",
            "Networking",
            "Block storage",
            "Object storage"
        ],
        correct: 1,
        explanation: "Neutron là networking service, quản lý mạng ảo, router, firewall, load balancer trong OpenStack."
    },
    {
        question: "Cinder trong OpenStack cung cấp dịch vụ gì?",
        options: [
            "Compute",
            "Object Storage",
            "Block Storage",
            "Image Storage"
        ],
        correct: 2,
        explanation: "Cinder cung cấp block storage (lưu trữ khối) cho các máy ảo, tương tự như ổ cứng ảo gắn vào VM."
    },
    {
        question: "Glance trong OpenStack làm gì?",
        options: [
            "Monitoring service",
            "Image service - quản lý VM images",
            "Dashboard",
            "Orchestration"
        ],
        correct: 1,
        explanation: "Glance là image service, quản lý các image (template) để tạo máy ảo như Ubuntu, CentOS images."
    },

    // Docker & Containers
    {
        question: "Container khác với máy ảo (VM) như thế nào?",
        options: [
            "Container nặng hơn VM",
            "Container chia sẻ kernel của host OS, VM có kernel riêng",
            "Container không thể chạy Linux",
            "Container cần hypervisor"
        ],
        correct: 1,
        explanation: "Container chia sẻ kernel của hệ điều hành host nên nhẹ và khởi động nhanh hơn VM. VM có hệ điều hành riêng, cần nhiều tài nguyên hơn."
    },
    {
        question: "Docker Image là gì?",
        options: [
            "Container đang chạy",
            "Template chỉ đọc để tạo container",
            "Phần mềm quản lý container",
            "Network của container"
        ],
        correct: 1,
        explanation: "Docker Image là template read-only chứa ứng dụng và dependencies. Container được tạo ra từ image."
    },
    {
        question: "Dockerfile dùng để làm gì?",
        options: [
            "Chạy container",
            "Định nghĩa cách build Docker image",
            "Quản lý network",
            "Monitor container"
        ],
        correct: 1,
        explanation: "Dockerfile là file text chứa các instruction để build Docker image tự động."
    },
    {
        question: "Docker Hub là gì?",
        options: [
            "Công cụ orchestration",
            "Registry lưu trữ và chia sẻ Docker images",
            "Container runtime",
            "Monitoring tool"
        ],
        correct: 1,
        explanation: "Docker Hub là registry công khai để lưu trữ, chia sẻ và tải Docker images."
    },

    // Kubernetes
    {
        question: "Kubernetes (K8s) được dùng để làm gì?",
        options: [
            "Tạo Docker images",
            "Orchestration và quản lý containers",
            "Build ứng dụng",
            "Tạo máy ảo"
        ],
        correct: 1,
        explanation: "Kubernetes là hệ thống orchestration để tự động hóa deployment, scaling, và quản lý containerized applications."
    },
    {
        question: "Pod trong Kubernetes là gì?",
        options: [
            "Docker image",
            "Đơn vị nhỏ nhất để deploy, chứa 1 hoặc nhiều containers",
            "Node trong cluster",
            "Service discovery"
        ],
        correct: 1,
        explanation: "Pod là đơn vị deploy nhỏ nhất trong K8s, có thể chứa một hoặc nhiều container chia sẻ network và storage."
    },
    {
        question: "Node trong Kubernetes là gì?",
        options: [
            "Container",
            "Pod",
            "Worker machine (máy vật lý hoặc VM) chạy Pods",
            "Service"
        ],
        correct: 2,
        explanation: "Node là máy worker (vật lý hoặc VM) trong cluster, chạy các Pods và được quản lý bởi control plane."
    },
    {
        question: "Service trong Kubernetes có vai trò gì?",
        options: [
            "Tạo Pod",
            "Expose Pods qua một endpoint ổn định",
            "Build image",
            "Monitor logs"
        ],
        correct: 1,
        explanation: "Service cung cấp endpoint ổn định để truy cập Pods, vì Pod có thể bị xóa/tạo lại và IP thay đổi."
    },
    {
        question: "Deployment trong K8s dùng để làm gì?",
        options: [
            "Expose service ra ngoài",
            "Quản lý replica và rolling update của Pods",
            "Lưu trữ configuration",
            "Quản lý network"
        ],
        correct: 1,
        explanation: "Deployment quản lý ReplicaSet, đảm bảo số lượng Pod mong muốn và hỗ trợ rolling update/rollback."
    },

    // AWS Basics
    {
        question: "EC2 trong AWS là gì?",
        options: [
            "Object storage",
            "Virtual servers (máy chủ ảo)",
            "Database service",
            "CDN service"
        ],
        correct: 1,
        explanation: "EC2 (Elastic Compute Cloud) cung cấp máy chủ ảo có thể scale theo nhu cầu."
    },
    {
        question: "S3 trong AWS dùng để làm gì?",
        options: [
            "Compute",
            "Object storage (lưu trữ file, object)",
            "Block storage",
            "Database"
        ],
        correct: 1,
        explanation: "S3 (Simple Storage Service) là dịch vụ object storage để lưu trữ file, backup, static website."
    },

    // Cloud Deployment Models
    {
        question: "Private Cloud là gì?",
        options: [
            "Cloud cho mọi người",
            "Cloud chỉ phục vụ một tổ chức",
            "Cloud của AWS",
            "Cloud miễn phí"
        ],
        correct: 1,
        explanation: "Private Cloud là hạ tầng cloud được xây dựng và sử dụng riêng cho một tổ chức, không chia sẻ với bên ngoài."
    },
    {
        question: "Public Cloud là gì?",
        options: [
            "Cloud miễn phí",
            "Cloud cung cấp cho nhiều khách hàng qua Internet",
            "Cloud chỉ cho chính phủ",
            "Cloud không có bảo mật"
        ],
        correct: 1,
        explanation: "Public Cloud (như AWS, Azure, GCP) cung cấp dịch vụ cho nhiều khách hàng qua Internet, chia sẻ hạ tầng."
    },
    {
        question: "Hybrid Cloud là gì?",
        options: [
            "Chỉ dùng private cloud",
            "Chỉ dùng public cloud",
            "Kết hợp private và public cloud",
            "Cloud không có kết nối Internet"
        ],
        correct: 2,
        explanation: "Hybrid Cloud kết hợp private cloud và public cloud, cho phép data và app di chuyển giữa hai môi trường."
    },

    // Security
    {
        question: "Multi-tenancy trong Cloud có nghĩa là gì?",
        options: [
            "Một khách hàng dùng nhiều server",
            "Nhiều khách hàng chia sẻ cùng hạ tầng nhưng data được cách ly",
            "Không có bảo mật",
            "Chỉ có một user"
        ],
        correct: 1,
        explanation: "Multi-tenancy là kiến trúc nhiều tenant (khách hàng) chia sẻ tài nguyên vật lý nhưng data và ứng dụng được cách ly logic."
    },

    // Cloud Characteristics
    {
        question: "Đặc điểm 'Elasticity' trong Cloud Computing có nghĩa là gì?",
        options: [
            "Cloud luôn miễn phí",
            "Có thể scale tài nguyên lên/xuống tự động theo nhu cầu",
            "Cloud không bao giờ down",
            "Chỉ dùng được ở một khu vực"
        ],
        correct: 1,
        explanation: "Elasticity là khả năng tự động scale tài nguyên lên/xuống theo nhu cầu thực tế, chỉ trả tiền cho những gì sử dụng."
    },
    {
        question: "Pay-as-you-go trong Cloud có nghĩa là gì?",
        options: [
            "Trả tiền trước 1 năm",
            "Miễn phí hoàn toàn",
            "Chỉ trả tiền cho tài nguyên đã sử dụng",
            "Giá cố định hàng tháng"
        ],
        correct: 2,
        explanation: "Pay-as-you-go nghĩa là chỉ trả tiền cho tài nguyên thực sự sử dụng (compute time, storage, bandwidth...)."
    },

    // Advanced Topics
    {
        question: "Serverless Computing là gì?",
        options: [
            "Không có server nào cả",
            "Developer chỉ viết code, không cần quản lý server",
            "Server luôn chạy 24/7",
            "Server miễn phí"
        ],
        correct: 1,
        explanation: "Serverless nghĩa là developer chỉ viết code (functions), cloud provider tự động quản lý server, scaling. Ví dụ: AWS Lambda."
    },
    {
        question: "Auto Scaling trong Cloud làm gì?",
        options: [
            "Tự động backup data",
            "Tự động tăng/giảm số lượng instances theo workload",
            "Tự động update phần mềm",
            "Tự động xóa data"
        ],
        correct: 1,
        explanation: "Auto Scaling tự động điều chỉnh số lượng instances (VMs, containers) dựa trên metrics như CPU, memory, traffic."
    },
    {
        question: "Load Balancer trong Cloud có tác dụng gì?",
        options: [
            "Tăng tốc độ CPU",
            "Phân phối traffic đều đến nhiều servers",
            "Lưu trữ data",
            "Backup server"
        ],
        correct: 1,
        explanation: "Load Balancer phân phối incoming traffic đến nhiều servers để tăng availability và fault tolerance."
    },

    // DevOps & Cloud
    {
        question: "CI/CD là viết tắt của gì?",
        options: [
            "Cloud Integration / Cloud Deployment",
            "Continuous Integration / Continuous Deployment",
            "Container Integration / Container Deployment",
            "Code Integration / Code Delivery"
        ],
        correct: 1,
        explanation: "CI/CD là Continuous Integration (tích hợp liên tục) và Continuous Deployment (triển khai liên tục), giúp tự động hóa quy trình phát triển phần mềm."
    },
    {
        question: "Infrastructure as Code (IaC) có nghĩa là gì?",
        options: [
            "Viết code để quản lý hạ tầng thay vì cấu hình thủ công",
            "Hạ tầng miễn phí",
            "Viết code trên server",
            "Không cần code"
        ],
        correct: 0,
        explanation: "IaC là việc quản lý và provisioning hạ tầng qua code (Terraform, CloudFormation) thay vì cấu hình thủ công."
    },

    // Monitoring & Management
    {
        question: "Trong Cloud, 'High Availability' có nghĩa là gì?",
        options: [
            "Giá rẻ",
            "Hệ thống hoạt động liên tục, ít downtime",
            "Tốc độ cao",
            "Bảo mật cao"
        ],
        correct: 1,
        explanation: "High Availability (HA) đảm bảo hệ thống hoạt động liên tục với uptime cao, thường qua redundancy và failover."
    },
    {
        question: "Disaster Recovery trong Cloud là gì?",
        options: [
            "Xóa data",
            "Khôi phục hệ thống sau sự cố nghiêm trọng",
            "Update phần mềm",
            "Tăng performance"
        ],
        correct: 1,
        explanation: "Disaster Recovery (DR) là kế hoạch và quy trình backup, restore để khôi phục hệ thống sau thảm họa (thiên tai, cyberattack...)."
    },

    // Additional OpenStack
    {
        question: "Swift trong OpenStack làm gì?",
        options: [
            "Compute service",
            "Object Storage service",
            "Database service",
            "Monitoring service"
        ],
        correct: 1,
        explanation: "Swift cung cấp object storage, tương tự AWS S3, để lưu trữ file, images, backup với khả năng scale cao."
    },
    {
        question: "Horizon trong OpenStack là gì?",
        options: [
            "CLI tool",
            "Web-based dashboard để quản lý OpenStack",
            "API service",
            "Storage service"
        ],
        correct: 1,
        explanation: "Horizon là web dashboard (GUI) cho phép user và admin quản lý OpenStack resources qua giao diện web."
    },
    {
        question: "Heat trong OpenStack có chức năng gì?",
        options: [
            "Monitoring",
            "Orchestration - tự động hóa triển khai infrastructure",
            "Networking",
            "Authentication"
        ],
        correct: 1,
        explanation: "Heat là orchestration service, cho phép define infrastructure dưới dạng code (template) và tự động deploy."
    }
];
