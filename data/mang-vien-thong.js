/* =========================================
   MẠNG VIỄN THÔNG - QUESTION BANK
   ========================================= */

const networkQuestions = [
    // OSI Model
    {
        question: "Mô hình OSI có bao nhiêu tầng?",
        options: [
            "5 tầng",
            "7 tầng",
            "4 tầng",
            "6 tầng"
        ],
        correct: 1,
        explanation: "Mô hình OSI (Open Systems Interconnection) có 7 tầng: Physical, Data Link, Network, Transport, Session, Presentation, Application."
    },
    {
        question: "Tầng nào của OSI chịu trách nhiệm định tuyến (routing)?",
        options: [
            "Data Link",
            "Network",
            "Transport",
            "Physical"
        ],
        correct: 1,
        explanation: "Tầng Network (tầng 3) chịu trách nhiệm định tuyến gói tin qua các router, sử dụng địa chỉ IP."
    },
    {
        question: "MAC address hoạt động ở tầng nào của mô hình OSI?",
        options: [
            "Physical",
            "Data Link",
            "Network",
            "Transport"
        ],
        correct: 1,
        explanation: "MAC address (địa chỉ phần cứng) hoạt động ở tầng Data Link (tầng 2), dùng để định danh thiết bị trong mạng cục bộ."
    },
    {
        question: "TCP và UDP hoạt động ở tầng nào?",
        options: [
            "Network",
            "Transport",
            "Session",
            "Application"
        ],
        correct: 1,
        explanation: "TCP và UDP là giao thức tầng Transport (tầng 4), cung cấp dịch vụ truyền dữ liệu end-to-end."
    },
    {
        question: "HTTP, FTP, SMTP hoạt động ở tầng nào?",
        options: [
            "Transport",
            "Session",
            "Presentation",
            "Application"
        ],
        correct: 3,
        explanation: "HTTP, FTP, SMTP là các giao thức tầng Application (tầng 7), cung cấp dịch vụ cho người dùng cuối."
    },

    // TCP/IP Model
    {
        question: "Mô hình TCP/IP có bao nhiêu tầng?",
        options: [
            "3 tầng",
            "4 tầng",
            "5 tầng",
            "7 tầng"
        ],
        correct: 1,
        explanation: "Mô hình TCP/IP có 4 tầng: Network Access (Link), Internet, Transport, Application."
    },
    {
        question: "Tầng Internet trong TCP/IP tương ứng với tầng nào trong OSI?",
        options: [
            "Data Link",
            "Network",
            "Transport",
            "Session"
        ],
        correct: 1,
        explanation: "Tầng Internet trong TCP/IP tương ứng với tầng Network trong OSI, sử dụng giao thức IP."
    },

    // IP Addressing
    {
        question: "Địa chỉ IPv4 có độ dài bao nhiêu bit?",
        options: [
            "16 bit",
            "32 bit",
            "64 bit",
            "128 bit"
        ],
        correct: 1,
        explanation: "IPv4 có độ dài 32 bit, được biểu diễn dạng 4 octet thập phân, ví dụ: 192.168.1.1."
    },
    {
        question: "Địa chỉ IPv6 có độ dài bao nhiêu bit?",
        options: [
            "32 bit",
            "64 bit",
            "128 bit",
            "256 bit"
        ],
        correct: 2,
        explanation: "IPv6 có độ dài 128 bit, được biểu diễn dạng hexa, ví dụ: 2001:0db8::1."
    },
    {
        question: "Địa chỉ nào sau đây là địa chỉ private (RFC 1918)?",
        options: [
            "8.8.8.8",
            "192.168.1.1",
            "1.1.1.1",
            "172.217.0.0"
        ],
        correct: 1,
        explanation: "Dải địa chỉ private: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Không được route trên Internet công cộng."
    },
    {
        question: "Subnet mask 255.255.255.0 tương ứng với prefix nào?",
        options: [
            "/16",
            "/24",
            "/8",
            "/32"
        ],
        correct: 1,
        explanation: "255.255.255.0 có 24 bit phần network, nên là /24. Cho phép 254 host (2^8 - 2)."
    },
    {
        question: "Loopback address của IPv4 là gì?",
        options: [
            "192.168.1.1",
            "127.0.0.1",
            "0.0.0.0",
            "255.255.255.255"
        ],
        correct: 1,
        explanation: "127.0.0.1 là loopback address (localhost), dùng để test kết nối trên chính máy đó."
    },

    // Routing & Switching
    {
        question: "Router hoạt động ở tầng nào của mô hình OSI?",
        options: [
            "Tầng 1",
            "Tầng 2",
            "Tầng 3",
            "Tầng 4"
        ],
        correct: 2,
        explanation: "Router là thiết bị tầng 3 (Network layer), dùng địa chỉ IP để định tuyến gói tin giữa các mạng khác nhau."
    },
    {
        question: "Switch hoạt động ở tầng nào của mô hình OSI?",
        options: [
            "Tầng 1",
            "Tầng 2",
            "Tầng 3",
            "Tầng 4"
        ],
        correct: 1,
        explanation: "Switch thông thường là thiết bị tầng 2 (Data Link), sử dụng MAC address để chuyển tiếp frame trong cùng một mạng."
    },
    {
        question: "Hub hoạt động ở tầng nào?",
        options: [
            "Tầng 1 (Physical)",
            "Tầng 2",
            "Tầng 3",
            "Tầng 7"
        ],
        correct: 0,
        explanation: "Hub là thiết bị tầng 1, chỉ đơn giản lặp lại (repeat) tín hiệu đến tất cả các port, không có intelligence."
    },
    {
        question: "Static routing là gì?",
        options: [
            "Routing tự động",
            "Administrator cấu hình route thủ công",
            "Routing qua OSPF",
            "Routing không cần cấu hình"
        ],
        correct: 1,
        explanation: "Static routing là việc admin cấu hình route thủ công trên router, không tự động thay đổi khi topology thay đổi."
    },
    {
        question: "Dynamic routing sử dụng gì để tự động học routes?",
        options: [
            "Cấu hình thủ công",
            "Routing protocols (OSPF, RIP, BGP...)",
            "MAC address",
            "DNS"
        ],
        correct: 1,
        explanation: "Dynamic routing sử dụng routing protocols như OSPF, RIP, EIGRP, BGP để tự động học và cập nhật routing table."
    },
    {
        question: "OSPF là gì?",
        options: [
            "Distance vector routing protocol",
            "Link-state routing protocol",
            "Transport protocol",
            "Application protocol"
        ],
        correct: 1,
        explanation: "OSPF (Open Shortest Path First) là link-state routing protocol, sử dụng thuật toán Dijkstra để tìm đường đi ngắn nhất."
    },
    {
        question: "BGP được sử dụng chủ yếu để làm gì?",
        options: [
            "Routing trong LAN",
            "Routing giữa các Autonomous Systems (Internet)",
            "Switching",
            "Load balancing"
        ],
        correct: 1,
        explanation: "BGP (Border Gateway Protocol) là giao thức định tuyến giữa các AS (Autonomous Systems), là backbone của Internet."
    },

    // TCP vs UDP
    {
        question: "TCP có đặc điểm gì?",
        options: [
            "Không tin cậy, không kết nối",
            "Tin cậy, hướng kết nối, đảm bảo thứ tự",
            "Nhanh hơn UDP",
            "Không có kiểm soát tắc nghẽn"
        ],
        correct: 1,
        explanation: "TCP là giao thức tin cậy, hướng kết nối, đảm bảo dữ liệu đến đúng thứ tự, có cơ chế retransmission và flow control."
    },
    {
        question: "UDP có đặc điểm gì?",
        options: [
            "Hướng kết nối",
            "Không kết nối, không đảm bảo tin cậy, nhanh",
            "Chậm hơn TCP",
            "Có retransmission"
        ],
        correct: 1,
        explanation: "UDP là giao thức không kết nối, không đảm bảo tin cậy nhưng nhanh, phù hợp cho streaming, gaming, DNS."
    },
    {
        question: "TCP sử dụng cơ chế nào để đảm bảo tin cậy?",
        options: [
            "Broadcast",
            "3-way handshake và ACK",
            "Multicast",
            "Flooding"
        ],
        correct: 1,
        explanation: "TCP sử dụng 3-way handshake để thiết lập kết nối và cơ chế ACK (Acknowledgment) để xác nhận nhận được dữ liệu."
    },
    {
        question: "Port nào dùng cho HTTP?",
        options: [
            "21",
            "22",
            "80",
            "443"
        ],
        correct: 2,
        explanation: "HTTP sử dụng port 80 (TCP). HTTPS sử dụng port 443."
    },
    {
        question: "Port nào dùng cho SSH?",
        options: [
            "20",
            "22",
            "23",
            "25"
        ],
        correct: 1,
        explanation: "SSH (Secure Shell) sử dụng port 22 (TCP) để truy cập remote an toàn."
    },
    {
        question: "Port nào dùng cho DNS?",
        options: [
            "25",
            "53",
            "80",
            "110"
        ],
        correct: 1,
        explanation: "DNS sử dụng port 53, thường dùng UDP cho queries nhưng cũng hỗ trợ TCP cho zone transfer."
    },

    // Wireless Networks
    {
        question: "Chuẩn Wi-Fi 802.11ac hoạt động trên băng tần nào?",
        options: [
            "2.4 GHz",
            "5 GHz",
            "2.4 GHz và 5 GHz",
            "60 GHz"
        ],
        correct: 1,
        explanation: "802.11ac (Wi-Fi 5) chủ yếu hoạt động trên băng tần 5 GHz, tốc độ cao hơn 802.11n."
    },
    {
        question: "Chuẩn Wi-Fi nào mới nhất hiện nay?",
        options: [
            "802.11n",
            "802.11ac",
            "802.11ax (Wi-Fi 6)",
            "802.11g"
        ],
        correct: 2,
        explanation: "802.11ax (Wi-Fi 6 và Wi-Fi 6E) là chuẩn mới nhất, cải thiện tốc độ, hiệu suất trong môi trường đông thiết bị."
    },
    {
        question: "WPA3 là gì?",
        options: [
            "Chuẩn Wi-Fi",
            "Giao thức bảo mật Wi-Fi mới nhất",
            "Frequency band",
            "Router brand"
        ],
        correct: 1,
        explanation: "WPA3 là chuẩn bảo mật Wi-Fi mới nhất (thay thế WPA2), cung cấp mã hóa mạnh hơn và bảo vệ tốt hơn."
    },
    {
        question: "SSID là gì?",
        options: [
            "Địa chỉ IP của router",
            "Tên của mạng Wi-Fi",
            "Loại mã hóa",
            "MAC address"
        ],
        correct: 1,
        explanation: "SSID (Service Set Identifier) là tên của mạng Wi-Fi mà thiết bị có thể nhìn thấy và kết nối."
    },

    // Optical Fiber
    {
        question: "Cáp quang truyền tín hiệu bằng gì?",
        options: [
            "Điện",
            "Ánh sáng",
            "Sóng radio",
            "Âm thanh"
        ],
        correct: 1,
        explanation: "Cáp quang (optical fiber) truyền tín hiệu bằng ánh sáng (light pulses), tốc độ cao, khoảng cách xa, ít nhiễu."
    },
    {
        question: "Single-mode fiber khác multi-mode fiber như thế nào?",
        options: [
            "Single-mode rẻ hơn",
            "Single-mode có lõi nhỏ hơn, truyền xa hơn",
            "Multi-mode nhanh hơn",
            "Không có sự khác biệt"
        ],
        correct: 1,
        explanation: "Single-mode fiber có lõi rất nhỏ (~9µm), truyền một mode ánh sáng, khoảng cách xa (>10km). Multi-mode có lõi lớn (~50-62.5µm), khoảng cách ngắn hơn."
    },
    {
        question: "Ưu điểm của cáp quang so với cáp đồng là gì?",
        options: [
            "Rẻ hơn",
            "Tốc độ cao hơn, khoảng cách xa hơn, ít nhiễu",
            "Dễ lắp đặt hơn",
            "Không cần thiết bị đặc biệt"
        ],
        correct: 1,
        explanation: "Cáp quang có băng thông lớn, tốc độ cao, khoảng cách xa, không bị nhiễu điện từ, nhưng đắt hơn và khó lắp đặt hơn."
    },

    // Network Security
    {
        question: "Firewall làm gì?",
        options: [
            "Tăng tốc độ mạng",
            "Lọc traffic, chặn truy cập không mong muốn",
            "Lưu trữ data",
            "Routing packets"
        ],
        correct: 1,
        explanation: "Firewall là hệ thống bảo mật giám sát và kiểm soát traffic vào/ra dựa trên các rule bảo mật được định nghĩa."
    },
    {
        question: "VPN (Virtual Private Network) dùng để làm gì?",
        options: [
            "Tăng tốc Internet",
            "Tạo kết nối an toàn, mã hóa qua mạng công cộng",
            "Chặn virus",
            "Lưu trữ file"
        ],
        correct: 1,
        explanation: "VPN tạo tunnel mã hóa qua Internet, cho phép truy cập an toàn vào mạng riêng từ xa, bảo vệ privacy."
    },
    {
        question: "DDoS attack là gì?",
        options: [
            "Virus trên máy tính",
            "Tấn công làm quá tải hệ thống bằng lượng traffic khổng lồ",
            "Đánh cắp password",
            "Mã hóa data"
        ],
        correct: 1,
        explanation: "DDoS (Distributed Denial of Service) là tấn công từ nhiều nguồn để làm quá tải hệ thống, khiến dịch vụ không khả dụng."
    },
    {
        question: "Encryption trong mạng làm gì?",
        options: [
            "Tăng tốc độ",
            "Mã hóa dữ liệu để bảo vệ khỏi nghe lén",
            "Nén data",
            "Định tuyến"
        ],
        correct: 1,
        explanation: "Encryption mã hóa dữ liệu để chỉ người có key mới đọc được, bảo vệ thông tin trên đường truyền."
    },

    // VoIP & Multimedia
    {
        question: "VoIP là gì?",
        options: [
            "Video Protocol",
            "Voice over IP - truyền thoại qua mạng IP",
            "Virtual Private Network",
            "Video on IP"
        ],
        correct: 1,
        explanation: "VoIP (Voice over IP) là công nghệ truyền thoại qua mạng IP thay vì đường dây điện thoại truyền thống."
    },
    {
        question: "SIP (Session Initiation Protocol) dùng để làm gì?",
        options: [
            "Routing",
            "Thiết lập, quản lý VoIP call và multimedia session",
            "Encryption",
            "File transfer"
        ],
        correct: 1,
        explanation: "SIP là giao thức để thiết lập, sửa đổi và kết thúc các phiên multimedia như VoIP call, video conference."
    },
    {
        question: "QoS (Quality of Service) trong mạng làm gì?",
        options: [
            "Tăng băng thông",
            "Ưu tiên traffic quan trọng (voice, video) hơn traffic khác",
            "Mã hóa data",
            "Lưu trữ packet"
        ],
        correct: 1,
        explanation: "QoS quản lý và ưu tiên traffic để đảm bảo chất lượng cho các ứng dụng thời gian thực như VoIP, video streaming."
    },

    // VLAN & Advanced
    {
        question: "VLAN là gì?",
        options: [
            "Virtual LAN - chia một switch vật lý thành nhiều LAN logic",
            "Very Large Area Network",
            "Virtual Link Access Network",
            "Video LAN"
        ],
        correct: 0,
        explanation: "VLAN (Virtual LAN) chia mạng vật lý thành nhiều mạng logic, cải thiện bảo mật và quản lý traffic."
    },
    {
        question: "NAT (Network Address Translation) làm gì?",
        options: [
            "Mã hóa data",
            "Chuyển đổi địa chỉ IP private sang public",
            "Routing packets",
            "Lưu trữ địa chỉ"
        ],
        correct: 1,
        explanation: "NAT chuyển đổi địa chỉ IP private thành public khi ra Internet, tiết kiệm địa chỉ IPv4 và tăng bảo mật."
    },
    {
        question: "DHCP làm gì?",
        options: [
            "Routing",
            "Tự động cấp phát địa chỉ IP cho thiết bị",
            "DNS resolution",
            "Firewall"
        ],
        correct: 1,
        explanation: "DHCP (Dynamic Host Configuration Protocol) tự động cấp phát địa chỉ IP, subnet mask, gateway, DNS cho thiết bị."
    },
    {
        question: "DNS làm gì?",
        options: [
            "Routing packets",
            "Chuyển đổi domain name thành địa chỉ IP",
            "Mã hóa data",
            "Cấp phát IP"
        ],
        correct: 1,
        explanation: "DNS (Domain Name System) chuyển đổi tên miền (google.com) thành địa chỉ IP (142.250.x.x), như 'danh bạ điện thoại' của Internet."
    },

    // Additional Topics
    {
        question: "CDN (Content Delivery Network) làm gì?",
        options: [
            "Mã hóa content",
            "Phân phối content từ server gần người dùng nhất",
            "Tạo content",
            "Xóa content"
        ],
        correct: 1,
        explanation: "CDN là mạng các server phân tán địa lý, cache và phân phối content (ảnh, video) từ server gần user nhất để tăng tốc độ."
    },
    {
        question: "Latency trong mạng là gì?",
        options: [
            "Băng thông",
            "Độ trễ - thời gian gói tin đi từ nguồn đến đích",
            "Tốc độ download",
            "Packet loss"
        ],
        correct: 1,
        explanation: "Latency là độ trễ, thời gian gói tin đi từ nguồn đến đích, đo bằng milliseconds (ms)."
    },
    {
        question: "Bandwidth là gì?",
        options: [
            "Độ trễ",
            "Băng thông - lượng data tối đa có thể truyền trong một khoảng thời gian",
            "Packet loss",
            "Jitter"
        ],
        correct: 1,
        explanation: "Bandwidth (băng thông) là lượng dữ liệu tối đa có thể truyền trên kênh trong một đơn vị thời gian, đo bằng bps (bits per second)."
    },
    {
        question: "MTU (Maximum Transmission Unit) là gì?",
        options: [
            "Tốc độ tối đa",
            "Kích thước gói tin lớn nhất có thể truyền",
            "Số lượng user tối đa",
            "Thời gian timeout"
        ],
        correct: 1,
        explanation: "MTU là kích thước frame/packet lớn nhất có thể truyền qua một network interface, thường là 1500 bytes cho Ethernet."
    },
    {
        question: "ARP (Address Resolution Protocol) làm gì?",
        options: [
            "Chuyển IP thành domain name",
            "Chuyển IP address thành MAC address",
            "Routing packets",
            "Mã hóa data"
        ],
        correct: 1,
        explanation: "ARP chuyển địa chỉ IP (tầng 3) thành địa chỉ MAC (tầng 2) trong mạng LAN, cần thiết để gửi frame đến đúng thiết bị."
    },
    {
        question: "ICMP protocol được sử dụng bởi lệnh nào?",
        options: [
            "telnet",
            "ping và traceroute",
            "ssh",
            "ftp"
        ],
        correct: 1,
        explanation: "ICMP (Internet Control Message Protocol) được sử dụng bởi ping (kiểm tra connectivity) và traceroute (theo dõi đường đi)."
    }
];
