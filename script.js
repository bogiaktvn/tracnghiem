const questions = [
    {
        question: 'Trong một mối quan hệ vợ chồng, điều gì quan trọng nhất để duy trì sự tôn trọng lẫn nhau?',
        options: [
            'Luôn đồng ý với mọi ý kiến của đối phương.',
            'Lắng nghe chân thành, dù có bất đồng quan điểm, và không cắt ngang lời khi người kia đang nói.',
            'Chỉ nói chuyện khi có vấn đề lớn cần giải quyết.',
            'Giữ im lặng để tránh xung đột.'
        ],
        correctAnswer: 'Lắng nghe chân thành, dù có bất đồng quan điểm, và không cắt ngang lời khi người kia đang nói.',
        feedback: {
            correct: 'Chính xác! Sự lắng nghe và tôn trọng khi giao tiếp là nền tảng của mọi mối quan hệ bền vững.',
            incorrect: 'Chưa đúng. Tôn trọng thể hiện qua cách lắng nghe và cho phép đối phương bày tỏ quan điểm một cách trọn vẹn, ngay cả khi bạn không đồng tình.'
        }
    },
    {
        question: 'Khi vợ hoặc chồng có thu nhập không cao bằng đối phương, điều gì là quan trọng nhất để giữ gìn sự hòa thuận trong gia đình?',
        options: [
            'Thường xuyên so sánh thu nhập và gây áp lực tài chính.',
            'Ghi nhận những đóng góp khác của người kia cho gia đình (thời gian, công sức, chăm sóc con cái).',
            'Yêu cầu người có thu nhập thấp hơn phải tìm cách kiếm tiền nhiều hơn.',
            'Tách biệt hoàn toàn tài chính để không ai phải phụ thuộc ai.'
        ],
        correctAnswer: 'Ghi nhận những đóng góp khác của người kia cho gia đình (thời gian, công sức, chăm sóc con cái).',
        feedback: {
            correct: 'Chính xác! Giá trị của một người không chỉ nằm ở thu nhập. Sự ghi nhận và trân trọng những đóng góp phi tài chính giúp xây dựng mối quan hệ công bằng và hạnh phúc.',
            incorrect: 'Chưa đúng. So sánh hay gây áp lực tài chính dễ dẫn đến mâu thuẫn. Điều quan trọng là trân trọng mọi đóng góp của nhau cho gia đình.'
        }
    },
    {
        question: 'Việc dành thời gian cho gia đình, đặc biệt là cho con cái, mang lại lợi ích quan trọng nhất nào?',
        options: [
            'Chứng tỏ mình là người cha/mẹ có trách nhiệm trước mặt xã hội.',
            'Giúp con cái phát triển toàn diện về tinh thần, cảm xúc và tạo sự gắn kết bền chặt trong gia đình.',
            'Giảm bớt gánh nặng cho người bạn đời trong việc chăm sóc con.',
            'Có thêm nhiều ảnh đẹp để đăng lên mạng xã hội.'
        ],
        correctAnswer: 'Giúp con cái phát triển toàn diện về tinh thần, cảm xúc và tạo sự gắn kết bền chặt trong gia đình.',
        feedback: {
            correct: 'Chính xác! Thời gian chất lượng bên con là món quà quý giá nhất, giúp con cảm thấy được yêu thương, an toàn và phát triển khỏe mạnh.',
            incorrect: 'Chưa đúng. Lợi ích quan trọng nhất của việc dành thời gian cho gia đình và con cái là sự phát triển toàn diện của con và sự gắn kết gia đình.'
        }
    },
    {
        question: 'Bạn có nghĩ rằng các mối quan hệ xã hội bên ngoài, đặc biệt là với người khác giới, có thể ảnh hưởng đến cuộc sống hôn nhân không?',
        options: [
            'Không, miễn là tôi không làm gì sai.',
            'Chỉ ảnh hưởng nếu người bạn đời quá nhạy cảm.',
			'Có, nếu không có sự minh bạch và ranh giới rõ ràng, dễ gây ra hiểu lầm và mất niềm tin.',
            'Mối quan hệ bên ngoài là hoàn toàn riêng tư và không liên quan đến hôn nhân.'
        ],
        correctAnswer: 'Có, nếu không có sự minh bạch và ranh giới rõ ràng, dễ gây ra hiểu lầm và mất niềm tin.',
        feedback: {
            correct: 'Chính xác! Minh bạch và ranh giới rõ ràng là chìa khóa để các mối quan hệ xã hội không ảnh hưởng tiêu cực đến hôn nhân.',
            incorrect: 'Chưa đúng. Mối quan hệ bên ngoài có thể gây ảnh hưởng nếu thiếu sự minh bạch và không có ranh giới rõ ràng, dẫn đến hiểu lầm và tổn hại niềm tin.'
        }
    },
    {
        question: 'Khi vợ chồng có tài chính riêng, điều gì có thể giúp cả hai cảm thấy an tâm và tin tưởng hơn về việc chi tiêu cho gia đình?',
        options: [
           'Có sự trao đổi định kỳ về tình hình tài chính cá nhân và cùng thống nhất các khoản chi tiêu chung cho gia đình.',
		   'Không ai hỏi về tiền của ai.',
           'Người có thu nhập cao hơn sẽ tự động lo hết mọi chi phí.',
           'Chỉ chia sẻ thông tin tài chính khi có vấn đề lớn phát sinh.'
        ],
        correctAnswer: 'Có sự trao đổi định kỳ về tình hình tài chính cá nhân và cùng thống nhất các khoản chi tiêu chung cho gia đình.',
        feedback: {
            correct: 'Chính xác! Sự minh bạch và thống nhất tài chính, dù riêng hay chung, đều giúp xây dựng niềm tin và sự ổn định cho gia đình.',
            incorrect: 'Chưa đúng. Dù có tài chính riêng, việc trao đổi và thống nhất các khoản chi chung cho gia đình là cách tốt nhất để tạo sự an tâm và minh bạch.'
        }
    },
    {
        question: 'Việc một người chồng chủ động mua sắm đồ dùng gia đình và đưa con đi chơi thể hiện điều gì quan trọng nhất?',
        options: [
            'Anh ấy đang cố gắng thể hiện trách nhiệm để được khen ngợi.',
            'Anh ấy rảnh rỗi nên làm những việc đó.',
			'Anh ấy yêu thương gia đình, có trách nhiệm và muốn dành thời gian chất lượng cho con cái.',
            'Anh ấy muốn kiểm soát mọi chi tiêu trong gia đình.'
        ],
        correctAnswer: 'Anh ấy yêu thương gia đình, có trách nhiệm và muốn dành thời gian chất lượng cho con cái.',
        feedback: {
            correct: 'Chính xác! Đây là biểu hiện của tình yêu, sự quan tâm và trách nhiệm của người chồng đối với tổ ấm của mình.',
            incorrect: 'Chưa đúng. Những hành động này thể hiện tình yêu, trách nhiệm và mong muốn gắn kết của người chồng với gia đình và con cái.'
        }
    },
    {
        question: 'Khi bạn không gò bó về thời gian do công việc kinh doanh, nhưng lại dành nhiều thời gian đi với bạn bè hơn, điều này có thể gây ra cảm giác gì cho gia đình?',
        options: [
            'Cảm thấy tự hào vì vợ có nhiều mối quan hệ.',
            'Cảm thấy bị bỏ bê, thiếu sự kết nối và có thể dẫn đến mâu thuẫn.',
            'Không sao cả, mỗi người cần có không gian riêng.',
            'Vợ đang tận hưởng cuộc sống và điều đó là tốt.'
        ],
        correctAnswer: 'Cảm thấy bị bỏ bê, thiếu sự kết nối và có thể dẫn đến mâu thuẫn.',
        feedback: {
            correct: 'Chính xác! Sự cân bằng giữa công việc, bạn bè và gia đình là rất quan trọng để duy trì hạnh phúc hôn nhân.',
            incorrect: 'Chưa đúng. Việc thiếu sự hiện diện và tương tác có thể làm cho các thành viên trong gia đình cảm thấy bị bỏ bê, dẫn đến rạn nứt.'
        }
    },
    {
        question: 'Việc chặn tài khoản mạng xã hội của đối phương thường phản ánh vấn đề gì trong mối quan hệ?',
        options: [
            'Muốn có không gian riêng tư tuyệt đối.',
            'Có sự bất mãn, thiếu giao tiếp và mất niềm tin.',
            'Chỉ là hành động vô tình không có ý nghĩa gì.',
            'Đang chuẩn bị tạo bất ngờ cho đối phương.'
        ],
        correctAnswer: 'Có sự bất mãn, thiếu giao tiếp và mất niềm tin.',
        feedback: {
            correct: 'Chính xác! Hành động này thường là dấu hiệu của những vấn đề sâu sắc hơn về cảm xúc và giao tiếp trong mối quan hệ.',
            incorrect: 'Chưa đúng. Việc chặn đối phương mà không giải thích thường cho thấy sự bất mãn, thiếu giao tiếp và làm suy yếu niềm tin giữa hai người.'
        }
    },
    {
        question: 'Tầm quan trọng của giao tiếp cởi mở và trung thực trong hôn nhân là gì?',
        options: [
            'Để biết được mọi thứ đối phương đang làm.',
            'Chỉ để tranh luận khi có bất đồng.',
            'Không cần thiết nếu hai người đã yêu nhau lâu.',
			'Xây dựng niềm tin, giải quyết mâu thuẫn và thấu hiểu lẫn nhau sâu sắc hơn.',
        ],
        correctAnswer: 'Xây dựng niềm tin, giải quyết mâu thuẫn và thấu hiểu lẫn nhau sâu sắc hơn.',
        feedback: {
            correct: 'Chính xác! Giao tiếp là xương sống của mọi mối quan hệ bền vững, giúp vợ chồng cùng nhau vượt qua mọi thử thách.',
            incorrect: 'Chưa đúng. Giao tiếp cởi mở giúp xây dựng niềm tin, giải quyết mâu thuẫn và thấu hiểu lẫn nhau, là yếu tố cốt lõi của một cuộc hôn nhân hạnh phúc.'
        }
    },
    {
        question: 'Để con cái cảm nhận được mái ấm gia đình, điều gì là quan trọng nhất mà cha mẹ cần làm?',
        options: [
            'Cung cấp đầy đủ vật chất cho con.',
			'Để con tự lập hoàn toàn ngay từ nhỏ.',
            'Luôn ở bên cạnh, quan tâm, thể hiện tình yêu thương và làm gương cho con.',
            'Chỉ chăm sóc khi con cần sự giúp đỡ cụ thể.'
        ],
        correctAnswer: 'Luôn ở bên cạnh, quan tâm, thể hiện tình yêu thương và làm gương cho con.',
        feedback: {
            correct: 'Chính xác! Tình yêu thương, sự quan tâm và làm gương từ cha mẹ là yếu tố then chốt để xây dựng một mái ấm thực sự cho con.',
            incorrect: 'Chưa đúng. Dù vật chất quan trọng, tình yêu thương, sự quan tâm và làm gương từ cha mẹ mới là yếu tố cốt lõi để con cái cảm nhận được mái ấm gia đình.'
        }
    },
    {
        question: 'Theo bạn, vai trò của người chồng trong việc vun đắp hạnh phúc gia đình là gì?',
        options: [
            'Chỉ cần kiếm tiền thật nhiều.',
            'Là trụ cột về tinh thần, luôn quan tâm, chia sẻ và cùng vợ xây dựng tổ ấm, dù thu nhập có thể không phải cao nhất.',
            'Người quyết định mọi việc lớn nhỏ trong gia đình.',
            'Không cần làm gì nhiều, vợ sẽ lo liệu hết.'
        ],
        correctAnswer: 'Là trụ cột về tinh thần, luôn quan tâm, chia sẻ và cùng vợ xây dựng tổ ấm, dù thu nhập có thể không phải cao nhất.',
        feedback: {
            correct: 'Chính xác! Vai trò của người chồng không chỉ dừng lại ở tài chính mà còn là chỗ dựa tinh thần và người bạn đời cùng chia sẻ mọi gánh nặng.',
            incorrect: 'Chưa đúng. Vai trò của người chồng không chỉ là kiếm tiền. Anh ấy còn là trụ cột tinh thần, người bạn đời cùng sẻ chia và vun đắp tổ ấm.'
        },
    },
    {
        question: 'Để xây dựng lại niềm tin sau khi có những hiểu lầm hoặc mâu thuẫn trong hôn nhân, điều gì là cần thiết?',
        options: [
            'Quên đi mọi chuyện và không bao giờ nhắc lại.',
            'Thời gian, sự thay đổi chân thành, và hành động cụ thể để chứng minh sự thay đổi.',
            'Thường xuyên kiểm soát đối phương để đảm bảo họ không tái phạm.',
            'Tìm kiếm sự can thiệp từ người thân hoặc bạn bè.'
        ],
        correctAnswer: 'Thời gian, sự thay đổi chân thành, và hành động cụ thể để chứng minh sự thay đổi.',
        feedback: {
            correct: 'Chính xác! Niềm tin cần được xây dựng lại từng chút một qua sự chân thành và những hành động nhất quán.',
            incorrect: 'Chưa đúng. Xây dựng lại niềm tin là một quá trình cần thời gian, sự hối lỗi chân thành và những hành động cụ thể để chứng minh sự thay đổi, không phải bằng cách quên đi hay kiểm soát.'
        }
    },
    {
        question: 'Việc một người thường xuyên chi tiêu cho những việc không liên quan đến gia đình có thể gây ra cảm giác gì?',
        options: [
            'Cảm thấy thoải mái vì không phải lo ăn uống cho vợ.',
            'Không có vấn đề gì vì đó là tiền của riêng cô ấy.',
            'Vợ đang tận hưởng cuộc sống và điều đó là tốt.',
			'Cảm thấy bị thiếu tôn trọng, không được chia sẻ trách nhiệm và có thể dẫn đến sự xa cách tài chính và cảm xúc.',
        ],
        correctAnswer: 'Cảm thấy bị thiếu tôn trọng, không được chia sẻ trách nhiệm và có thể dẫn đến sự xa cách tài chính và cảm xúc.',
        feedback: {
            correct: 'Chính xác! Sự minh bạch và công bằng trong chi tiêu, đặc biệt là cho gia đình, là rất quan trọng để duy trì sự gắn kết.',
            incorrect: 'Chưa đúng. Hành vi này có thể gây ra cảm giác bị thiếu tôn trọng, không được chia sẻ trách nhiệm và dẫn đến sự xa cách trong mối quan hệ.'
        }
    },
    {
        question: 'Điều gì là cách tốt nhất để vợ chồng giải quyết những bất đồng về cách nuôi dạy con cái?',
        options: [
            'Người vợ/chồng nào cảm thấy đúng thì làm theo ý mình.',
            'Cùng nhau trò chuyện, lắng nghe quan điểm của nhau và tìm kiếm một phương pháp chung, thống nhất.',
            'Để con cái tự quyết định để chúng học cách độc lập.',
            'Tránh nói chuyện về vấn đề này để không xảy ra tranh cãi.'
        ],
        correctAnswer: 'Cùng nhau trò chuyện, lắng nghe quan điểm của nhau và tìm kiếm một phương pháp chung, thống nhất.',
        feedback: {
            correct: 'Chính xác! Sự thống nhất trong cách nuôi dạy con cái là yếu tố then chốt cho sự phát triển của con và sự hòa thuận của gia đình.',
            incorrect: 'Chưa đúng. Việc trò chuyện, lắng nghe và thống nhất phương pháp nuôi dạy con là điều cần thiết để đảm bảo sự phát triển tốt nhất cho con và sự hòa thuận của gia đình.'
        }
    },
    {
        question: 'Bao lâu rồi bạn chưa chụp hình chung và up lên mạng xã hội, Điều đó có ảnh hưởng gì không?',
        options: [
            'Tôi thấy bình thường',
	    'Không quan trọng, không ảnh hưởng gì.',
            'Đó là điều tốt, mang sự ấm áp, hạnh phúc cho cả 2.',
            'Không thực sự cần thiết.'
        ],
        correctAnswer: 'Đó là điều tốt, mang sự ấm áp, hạnh phúc cho cả 2.',
        feedback: {
            correct: 'Chính xác! Nó giúp cho tình cảm vợ chồng đi lên, từ đó mang lại những điều thú vị và mới mẻ cho mối quan hệ.',
            incorrect: 'Chưa đúng. Bạn không thể xem thường điều đó, rất dễ làm rạn nứt tình cảm.'
        }
    },
    {
        question: 'Khi vợ chồng cùng nhau vượt qua khó khăn, thử thách trong cuộc sống, điều đó mang lại ý nghĩa gì cho mối quan hệ?',
        options: [
            'Giúp mối quan hệ trở nên bền chặt hơn, thấu hiểu nhau hơn và củng cố niềm tin vào tương lai.',
            'Tăng thêm gánh nặng và áp lực cho cả hai.',
            'Chỉ là chuyện đương nhiên, không có gì đặc biệt.',
            'Làm cho hai người cảm thấy mệt mỏi và muốn từ bỏ.'
        ],
        correctAnswer: 'Giúp mối quan hệ trở nên bền chặt hơn, thấu hiểu nhau hơn và củng cố niềm tin vào tương lai.',
        feedback: {
            correct: 'Chính xác! Những thử thách được vượt qua cùng nhau là cơ hội để tình cảm vợ chồng thêm gắn bó và vững chắc.',
            incorrect: 'Chưa đúng. Vượt qua khó khăn cùng nhau giúp củng cố mối quan hệ, tăng cường sự thấu hiểu và niềm tin, làm cho tình cảm thêm bền chặt.'
        }
    },
    {
        question: 'Theo bạn, điều gì thể hiện sự trân trọng và tin tưởng từ người vợ đối với người chồng?',
        options: [
            'Luôn ca ngợi chồng trước mặt người khác.',
            'Lắng nghe những chia sẻ của chồng một cách nghiêm túc và không chê trách hay so sánh.',
            'Để chồng tự lo mọi việc mà không cần quan tâm.',
            'Thường xuyên hỏi về thu nhập của chồng.'
        ],
        correctAnswer: 'Lắng nghe những chia sẻ của chồng một cách nghiêm túc và không chê trách hay so sánh.',
        feedback: {
            correct: 'Chính xác! Sự lắng nghe, tin tưởng và không phán xét là cách tốt nhất để thể hiện sự trân trọng đối với người bạn đời.',
            incorrect: 'Chưa đúng. Tôn trọng và tin tưởng được thể hiện qua việc lắng nghe nghiêm túc, không chê trách hay so sánh, đặc biệt là khi chồng chia sẻ.'
        }
    },
    {
        question: 'Việc một người vợ hay so sánh chồng mình với người khác (ví dụ: về thu nhập, cách ứng xử) có thể ảnh hưởng như thế nào đến tâm lý người chồng?',
        options: [
            'Giúp anh ấy có động lực để phấn đấu hơn.',
            'Không ảnh hưởng gì, đó là chuyện bình thường.',
            'Anh ấy sẽ hiểu rằng vợ muốn tốt cho mình.',
            'Khiến anh ấy cảm thấy tự ti, bị tổn thương và làm rạn nứt mối quan hệ.'
        ],
        correctAnswer: 'Khiến anh ấy cảm thấy tự ti, bị tổn thương và làm rạn nứt mối quan hệ.',
        feedback: {
            correct: 'Chính xác! So sánh là một "kẻ giết người" thầm lặng của hạnh phúc hôn nhân, hãy tránh so sánh bạn đời với bất kỳ ai.',
            incorrect: 'Chưa đúng. So sánh có thể gây ra những tổn thương lớn, khiến người chồng cảm thấy tự ti, không được trân trọng, và làm suy yếu nền tảng hôn nhân.'
        }
    },
    {
        question: 'Việc vợ chồng cùng nhau tham gia các hoạt động xã hội hoặc sở thích chung có lợi ích gì cho mối quan hệ?',
        options: [
            'Chỉ để có thêm bạn bè.',
            'Không cần thiết, mỗi người nên có cuộc sống riêng.',
            'Tạo cơ hội gắn kết, chia sẻ trải nghiệm mới và tăng cường sự thấu hiểu lẫn nhau.',
            'Để chứng tỏ với người khác rằng hôn nhân của mình đang tốt đẹp.'
        ],
        correctAnswer: 'Tạo cơ hội gắn kết, chia sẻ trải nghiệm mới và tăng cường sự thấu hiểu lẫn nhau.',
        feedback: {
            correct: 'Chính xác! Cùng nhau khám phá và trải nghiệm giúp tình cảm vợ chồng thêm bền chặt và tươi mới.',
            incorrect: 'Chưa đúng. Cùng nhau tham gia các hoạt động giúp tạo thêm những kỷ niệm đẹp, tăng cường sự gắn kết và thấu hiểu trong hôn nhân.'
        }
    },
    {
        question: 'Khi một người luôn ưu tiên bạn bè hơn gia đình, điều này có thể gây ra hậu quả gì cho mối quan hệ hôn nhân?',
        options: [
            'Người vợ sẽ cảm thấy được tự do hơn.',
            'Gia đình sẽ cảm thấy bị bỏ rơi, thiếu sự quan tâm, dẫn đến mâu thuẫn và rạn nứt tình cảm.',
            'Không có vấn đề gì, đàn ông cần có không gian riêng.',
            'Người chồng sẽ vui vẻ hơn và điều đó tốt cho gia đình.'
        ],
        correctAnswer: 'Gia đình sẽ cảm thấy bị bỏ rơi, thiếu sự quan tâm, dẫn đến mâu thuẫn và rạn nứt tình cảm.',
        feedback: {
            correct: 'Chính xác! Sự cân bằng là chìa khóa. Gia đình cần được ưu tiên để duy trì sự gắn kết và hạnh phúc.',
            incorrect: 'Chưa đúng. Việc ưu tiên bạn bè hơn gia đình có thể khiến người thân cảm thấy bị bỏ rơi, gây ra những vấn đề nghiêm trọng cho mối quan hệ vợ chồng.'
        }
    },
    {
        question: 'Bạn nghĩ gì về câu nói: "Hôn nhân là một cuộc hành trình dài, cần sự nỗ lực từ cả hai phía"?',
        options: [
            'Nó có nghĩa là hôn nhân rất khó khăn và đầy áp lực.',
            'Nó có nghĩa là cả vợ và chồng cần liên tục vun đắp, thấu hiểu và cùng nhau vượt qua mọi thử thách để duy trì hạnh phúc.',
            'Nó chỉ là một câu nói sáo rỗng.',
            'Nó có nghĩa là một người sẽ phải hy sinh nhiều hơn người kia.'
        ],
        correctAnswer: 'Nó có nghĩa là cả vợ và chồng cần liên tục vun đắp, thấu hiểu và cùng nhau vượt qua mọi thử thách để duy trì hạnh phúc.',
        feedback: {
            correct: 'Chính xác! Hôn nhân là sự hợp tác, đồng hành và nỗ lực không ngừng nghỉ từ cả hai người.',
            incorrect: 'Chưa đúng. Câu nói này nhấn mạnh tầm quan trọng của sự nỗ lực, vun đắp và đồng hành từ cả hai phía để hôn nhân bền vững và hạnh phúc, không phải là sự khó khăn hay hy sinh một chiều.'
        }
    },
];

const introScreen = document.getElementById('intro-screen');
const quizContainer = document.querySelector('.quiz-container');
const startQuizButton = document.getElementById('start-quiz-button');
const backgroundMusic = document.getElementById('background-music');

const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackTextElement = document.getElementById('feedback-text');
const resultArea = document.getElementById('result-area');
const questionArea = document.getElementById('question-area');
const correctCountElement = document.getElementById('correct-count');
const totalQuestionsElement = document.getElementById('total-questions');
const percentageTextElement = document.getElementById('percentage-text');
const feedbackTextOverallElement = document.getElementById('feedback-text-overall');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    introScreen.style.display = 'none'; // Ẩn màn hình giới thiệu
    quizContainer.style.display = 'block'; // Hiển thị quiz container
    // Cố gắng phát nhạc, trình duyệt có thể hạn chế tự động phát cho đến khi có tương tác người dùng
    backgroundMusic.play().catch(error => {
        console.log("Autoplay was prevented:", error);
    });
    loadQuestion();
}

// Event listener for the start quiz button
startQuizButton.addEventListener('click', startQuiz);


function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionTextElement.textContent = currentQuestion.question;
        optionsContainer.innerHTML = ''; // Xóa các lựa chọn trước đó
        feedbackTextElement.textContent = ''; // Xóa phản hồi trước đó

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button');
            button.addEventListener('click', () => selectOption(option, currentQuestion.correctAnswer, currentQuestion.feedback));
            optionsContainer.appendChild(button);
        });
    } else {
        showResult();
    }
}

function selectOption(selectedOption, correctAnswer, feedback) {
    // Vô hiệu hóa tất cả các nút lựa chọn sau khi chọn
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('incorrect');
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        feedbackTextElement.textContent = feedback.correct;
        feedbackTextElement.classList.remove('feedback-incorrect');
        feedbackTextElement.classList.add('feedback-correct');
    } else {
        feedbackTextElement.textContent = feedback.incorrect;
        feedbackTextElement.classList.remove('feedback-correct');
        feedbackTextElement.classList.add('feedback-incorrect');
    }

    // Thêm độ trễ ngắn trước khi tải câu hỏi tiếp theo
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 3000); // Độ trễ 3000 mili giây (3 giây)
}

function showResult() {
    questionArea.style.display = 'none';
    resultArea.style.display = 'block';

    correctCountElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
    const percentage = (score / questions.length) * 100;
    percentageTextElement.textContent = `Tỷ lệ đúng: ${percentage.toFixed(2)}%`;

    let overallFeedback = '';
    if (percentage >= 80) {
        overallFeedback = 'Chúc mừng! Bạn có sự thấu hiểu rất sâu sắc về tình cảm vợ chồng và các yếu tố xây dựng hôn nhân hạnh phúc. Hãy tiếp tục vun đắp mối quan hệ của mình nhé! Đừng đánh mất đi thứ mình luôn có bên mình';
    } else if (percentage >= 50) {
        overallFeedback = 'Bạn có kiến thức cơ bản về tình cảm vợ chồng, nhưng có thể cần tìm hiểu thêm một số khía cạnh để mối quan hệ thêm sâu sắc. Hôn nhân là một hành trình học hỏi không ngừng!';
    } else {
        overallFeedback = 'Có vẻ bạn cần suy nghĩ và tìm hiểu thêm về các yếu tố quan trọng trong tình cảm vợ chồng và hôn nhân. Đừng ngại tìm kiếm sự hỗ trợ hoặc cùng chồng/vợ trò chuyện nhiều hơn để vun đắp mối quan hệ nhé.';
    }
    feedbackTextOverallElement.innerHTML = `<p>${overallFeedback}</p>`;
    feedbackTextOverallElement.style.display = 'block';
}

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultArea.style.display = 'none';
    questionArea.style.display = 'block';
    loadQuestion();
});

// Ban đầu không cần loadQuestion() ở đây vì nó sẽ được gọi bởi startQuiz
