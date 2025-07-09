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
        question: 'Khi bạn có thời gian tự do do công việc kinh doanh, nhưng lại dành nhiều thời gian đi với bạn bè hơn ở nhà, điều này có thể gây ra cảm giác gì cho gia đình?',
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
        question: 'Việc một người vợ thường xuyên chi tiêu cho những việc không liên quan đến gia đình có thể gây ra cảm giác gì cho người chồng?',
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
        question: 'Việc vợ chồng có những sở thích hoặc không gian riêng biệt là tốt hay xấu cho hôn nhân?',
        options: [
            'Xấu, vì vợ chồng phải làm mọi thứ cùng nhau.',
			'Không quan trọng, không ảnh hưởng gì.',
            'Tốt, giúp mỗi người phát triển bản thân và mang lại sự mới mẻ cho mối quan hệ, tránh nhàm chán.',
            'Chỉ tốt khi hai người không còn yêu nhau nữa.'
        ],
        correctAnswer: 'Tốt, giúp mỗi người phát triển bản thân và mang lại sự mới mẻ cho mối quan hệ, tránh nhàm chán.',
        feedback: {
            correct: 'Chính xác! Sự độc lập lành mạnh giúp mỗi người có không gian riêng để phát triển, từ đó mang lại những điều thú vị và mới mẻ cho mối quan hệ.',
            incorrect: 'Chưa đúng. Có những sở thích và không gian riêng lành mạnh thực sự có thể làm phong phú thêm mối quan hệ, giúp mỗi người phát triển và duy trì sự hấp dẫn.'
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
			'Khiến anh ấy cảm thấy tự ti, không được ghi nhận và có thể làm rạn nứt tình cảm vợ chồng.',
        ],
        correctAnswer: 'Khiến anh ấy cảm thấy tự ti, không được ghi nhận và có thể làm rạn nứt tình cảm vợ chồng.',
        feedback: {
            correct: 'Chính xác! So sánh là một trong những yếu tố dễ gây tổn thương nhất trong hôn nhân, làm suy yếu sự tự tin và tình cảm của đối phương.',
            incorrect: 'Chưa đúng. So sánh thường khiến người chồng cảm thấy tự ti, không được ghi nhận và có thể gây rạn nứt tình cảm, chứ không phải tạo động lực tích cực.'
        }
    },
    {
        question: 'Nếu bạn  dành nhiều thời gian hơn cho gia đình và con cái, điều đó sẽ mang lại lợi ích gì cho mối quan hệ vợ chồng?',
        options: [
            'Người chồng sẽ có nhiều thời gian rảnh hơn để làm việc riêng.',
            'Tăng cường sự gắn kết, thấu hiểu và hạnh phúc chung của cả gia đình, tạo môi trường tốt hơn cho con cái.',
            'Không có gì thay đổi đáng kể.',
            'Khiến người chồng cảm thấy bị kiểm soát.'
        ],
        correctAnswer: 'Tăng cường sự gắn kết, thấu hiểu và hạnh phúc chung của cả gia đình, tạo môi trường tốt hơn cho con cái.',
        feedback: {
            correct: 'Chính xác! Sự hiện diện và quan tâm của cả hai là yếu tố then chốt cho một gia đình hạnh phúc và một mối quan hệ bền vững.',
            incorrect: 'Chưa đúng. Sự thay đổi tích cực này sẽ tăng cường sự gắn kết, thấu hiểu và hạnh phúc chung của gia đình, tạo môi trường tốt hơn cho con cái.'
        }
    },
    {
        question: 'Việc vợ chồng cùng nhau lên kế hoạch tài chính và chi tiêu cho gia đình, dù tiền ai nấy cầm, có ý nghĩa gì?',
        options: [
            'Để kiểm soát tiền bạc của đối phương.',
            'Là việc không cần thiết vì tiền ai nấy cầm rồi.',
			'Tạo sự minh bạch, công bằng và cùng nhau hướng tới mục tiêu chung của gia đình.',
            'Chỉ làm khi có dự định mua sắm lớn.'
        ],
        correctAnswer: 'Tạo sự minh bạch, công bằng và cùng nhau hướng tới mục tiêu chung của gia đình.',
        feedback: {
            correct: 'Chính xác! Sự hợp tác tài chính, dù ở hình thức nào, đều giúp xây dựng niềm tin và sự ổn định cho tổ ấm.',
            incorrect: 'Chưa đúng. Việc cùng nhau lên kế hoạch tài chính giúp tạo sự minh bạch, công bằng và cùng hướng tới mục tiêu chung của gia đình, không chỉ để kiểm soát hay khi có dự định lớn.'
        }
    },
    {
        question: 'Khi chồng cố gắng nói chuyện hoặc góp ý, nhưng vợ lại thể hiện sự thiếu tôn trọng (ví dụ: cắt lời, cười cợt), điều đó có thể dẫn đến hậu quả gì?',
        options: [
            'Chồng sẽ hiểu rằng vợ không muốn nói chuyện.',
            'Không ảnh hưởng gì, đó là cách giao tiếp bình thường của vợ.',
            'Chồng sẽ tìm cách thuyết phục vợ bằng mọi giá.',
			'Khiến chồng cảm thấy bị tổn thương, không được lắng nghe, và dần dần sẽ ít chia sẻ hơn, gây xa cách.',
        ],
        correctAnswer: 'Khiến chồng cảm thấy bị tổn thương, không được lắng nghe, và dần dần sẽ ít chia sẻ hơn, gây xa cách.',
        feedback: {
            correct: 'Chính xác! Sự tôn trọng trong giao tiếp là yếu tố sống còn để duy trì sự kết nối và thấu hiểu lẫn nhau.',
            incorrect: 'Chưa đúng. Hành vi không tôn trọng khi giao tiếp có thể gây tổn thương, khiến người chồng ít chia sẻ hơn và dẫn đến sự xa cách trong mối quan hệ.'
        }
    },
    {
        question: 'Theo bạn, ranh giới phù hợp cho các mối quan hệ xã hội trên mạng xã hội khi đã kết hôn là gì?',
        options: [
            'Không có ranh giới nào, mọi tương tác đều bình thường.',
            'Không tương tác "riêng tư" với người khác giới, luôn minh bạch với bạn đời và đặt gia đình lên hàng đầu.',
            'Chỉ cần không gặp gỡ bên ngoài là được.',
            'Mạng xã hội là không gian cá nhân, không liên quan đến hôn nhân.'
        ],
        correctAnswer: 'Không tương tác "riêng tư" với người khác giới, luôn minh bạch với bạn đời và đặt gia đình lên hàng đầu.',
        feedback: {
            correct: 'Chính xác! Sự minh bạch và ranh giới rõ ràng trên mạng xã hội là cần thiết để bảo vệ hôn nhân khỏi những hiểu lầm và tổn hại.',
            incorrect: 'Chưa đúng. Ranh giới phù hợp bao gồm việc không có những tương tác "riêng tư" với người khác giới, luôn minh bạch với bạn đời và đặt gia đình lên hàng đầu, để tránh hiểu lầm và mất niềm tin.'
        }
    },
    {
        question: 'Tại sao việc vợ chồng cùng nhau dành thời gian cho con cái, dù bận rộn đến mấy, lại quan trọng?',
        options: [
            'Để xây dựng kỷ niệm chung, tạo sự gắn kết gia đình và là tấm gương về tình yêu thương cho con.',
			'Chỉ để con không cảm thấy thiếu thốn vật chất.',
            'Không quan trọng, chỉ cần một người lo cho con là đủ.',
            'Để vợ chồng có cớ đi chơi bên ngoài.'
        ],
        correctAnswer: 'Để xây dựng kỷ niệm chung, tạo sự gắn kết gia đình và là tấm gương về tình yêu thương cho con.',
        feedback: {
            correct: 'Chính xác! Những khoảnh khắc bên con là vô giá, giúp xây dựng nền tảng vững chắc cho cả gia đình và tương lai của con.',
            incorrect: 'Chưa đúng. Việc cùng nhau dành thời gian cho con là để xây dựng kỷ niệm, tạo sự gắn kết và làm gương về tình yêu thương, chứ không chỉ đơn thuần là lo vật chất.'
        }
    },
    {
        question: 'Khi vợ chồng có sự tin tưởng lẫn nhau, điều đó giúp mối quan hệ phát triển như thế nào?',
        options: [
            'Khiến cả hai không cần giao tiếp nhiều nữa.',
            'Giúp mỗi người có thể làm điều mình muốn mà không cần bận tâm đến đối phương.',
		    'Tạo không gian thoải mái, an toàn để cả hai có thể là chính mình, chia sẻ mọi điều và cùng nhau phát triển.',
            'Làm cho cuộc sống trở nên nhàm chán hơn.'
        ],
        correctAnswer: 'Tạo không gian thoải mái, an toàn để cả hai có thể là chính mình, chia sẻ mọi điều và cùng nhau phát triển.',
        feedback: {
            correct: 'Chính xác! Niềm tin là nền tảng cho sự thoải mái, tự do và phát triển của mỗi cá nhân trong mối quan hệ vợ chồng.',
            incorrect: 'Chưa đúng. Tin tưởng lẫn nhau giúp tạo ra một không gian an toàn và thoải mái, nơi cả hai có thể là chính mình, chia sẻ mọi điều và cùng nhau phát triển.'
        }
    },
    {
        question: 'Việc người chồng bị chặn trên mạng xã hội bởi vợ để vợ tương tác với người khác có thể gây ra cảm xúc gì cho người chồng?',
        options: [
            'Cảm thấy được riêng tư hơn.',
            'Cảm thấy bị nghi ngờ, không tin tưởng, và bị loại trừ khỏi cuộc sống của vợ, dẫn đến tổn thương sâu sắc.',
            'Không có cảm xúc gì đặc biệt.',
            'Hiểu rằng vợ có những mối quan hệ riêng cần được tôn trọng.'
        ],
        correctAnswer: 'Cảm thấy bị nghi ngờ, không tin tưởng, và bị loại trừ khỏi cuộc sống của vợ, dẫn đến tổn thương sâu sắc.',
        feedback: {
            correct: 'Chính xác! Hành động này có thể gây ra sự tổn thương lớn về cảm xúc và làm suy yếu niềm tin trong hôn nhân.',
            incorrect: 'Chưa đúng. Hành động chặn trên mạng xã hội để tương tác với người khác có thể gây ra cảm giác bị nghi ngờ, không tin tưởng và bị loại trừ, dẫn đến tổn thương sâu sắc cho người chồng.'
        }
    },
    {
        question: 'Nếu bạn thể hiện sự tôn trọng hơn khi chồng nói và không so sánh, điều đó sẽ tác động như thế nào đến mối quan hệ của chúng tôi?',
        options: [
            'Không thay đổi nhiều, vì đó chỉ là lời nói.',
            'Sẽ giúp chồng cảm thấy được yêu thương, lắng nghe và trân trọng hơn, từ đó củng cố sự gắn kết và hòa thuận.',
            'Khiến chồng cảm thấy áp lực hơn.',
            'Chỉ là sự thay đổi tạm thời.'
        ],
        correctAnswer: 'Sẽ giúp chồng cảm thấy được yêu thương, lắng nghe và trân trọng hơn, từ đó củng cố sự gắn kết và hòa thuận.',
        feedback: {
            correct: 'Chính xác! Những thay đổi tích cực trong giao tiếp và thái độ sẽ mang lại lợi ích lớn cho sự phát triển của mối quan hệ vợ chồng.',
            incorrect: 'Chưa đúng. Sự tôn trọng và không so sánh sẽ khiến chồng cảm thấy được yêu thương, lắng nghe và trân trọng hơn, từ đó củng cố mối quan hệ và hòa thuận.'
        }
    },
    {
        question: 'Để đảm bảo sự ổn định tài chính cho gia đình, dù tiền ai nấy cầm, điều gì là quan trọng nhất?',
        options: [
            'Người nào có nhiều tiền hơn thì chịu trách nhiệm chính.',
            'Cả hai cùng có trách nhiệm đóng góp vào chi phí sinh hoạt chung và tiết kiệm cho tương lai gia đình.',
            'Mỗi người tự chi tiêu theo ý mình và không cần bàn bạc.',
            'Chỉ tập trung vào việc kiếm tiền cá nhân.'
        ],
        correctAnswer: 'Cả hai cùng có trách nhiệm đóng góp vào chi phí sinh hoạt chung và tiết kiệm cho tương lai gia đình.',
        feedback: {
            correct: 'Chính xác! Trách nhiệm tài chính chung là yếu tố cốt lõi để xây dựng một gia đình vững mạnh, bất kể cách quản lý tài chính riêng.',
            incorrect: 'Chưa đúng. Cả hai vợ chồng cần có trách nhiệm đóng góp vào chi phí chung và cùng nhau tiết kiệm cho tương lai gia đình, không phụ thuộc vào việc tiền ai nấy cầm.'
        }
    },
    {
        question: 'Bạn nghĩ gì về câu nói: "Hôn nhân là một cuộc hành trình dài, cần sự nỗ lực từ cả hai phía"?',
        options: [
            'Nó có nghĩa là cả vợ và chồng cần liên tục vun đắp, thấu hiểu và cùng nhau vượt qua mọi thử thách để duy trì hạnh phúc.',
			'Nó có nghĩa là hôn nhân rất khó khăn và đầy áp lực.',
            'Nó chỉ là một câu nói sáo rỗng.',
            'Nó có nghĩa là một người sẽ phải hy sinh nhiều hơn người kia.'
        ],
        correctAnswer: 'Nó có nghĩa là cả vợ và chồng cần liên tục vun đắp, thấu hiểu và cùng nhau vượt qua mọi thử thách để duy trì hạnh phúc.',
        feedback: {
            correct: 'Chính xác! Hôn nhân là sự hợp tác, đồng hành và nỗ lực không ngừng nghỉ từ cả hai người.',
            incorrect: 'Chưa đúng. Câu nói này nhấn mạnh tầm quan trọng của sự nỗ lực, vun đắp và đồng hành từ cả hai phía để hôn nhân bền vững và hạnh phúc, không phải là sự khó khăn hay hy sinh một chiều.'
        }
    },
    {
        question: 'Việc vợ chồng dành thời gian đi chơi, hẹn hò như lúc mới yêu có ý nghĩa gì đối với mối quan hệ lâu năm?',
        options: [
            'Không cần thiết vì đã kết hôn rồi.',
            'Giúp hâm nóng tình cảm, tái tạo sự lãng mạn và nhắc nhở về tình yêu ban đầu.',
            'Tốn thời gian và tiền bạc.',
            'Chỉ là để khoe khoang với bạn bè.'
        ],
        correctAnswer: 'Giúp hâm nóng tình cảm, tái tạo sự lãng mạn và nhắc nhở về tình yêu ban đầu.',
        feedback: {
            correct: 'Chính xác! Những khoảnh khắc lãng mạn giúp giữ lửa tình yêu và duy trì sự kết nối cảm xúc sâu sắc giữa vợ chồng.',
            incorrect: 'Chưa đúng. Việc hẹn hò và dành thời gian chất lượng giúp hâm nóng tình cảm, tái tạo sự lãng mạn và nhắc nhở về tình yêu ban đầu, không phải là không cần thiết hay tốn kém.'
        }
    },
    {
        question: 'Nếu bạn chủ động chia sẻ chi tiêu cho gia đình và giảm đi các cuộc vui bên ngoài, điều đó sẽ tác động như thế nào đến sự tin tưởng của chồng?',
        options: [
            'Chồng sẽ không tin vì đây là thay đổi quá lớn.',
            'Chồng sẽ cảm thấy bị kiểm soát.',
			'Sẽ giúp chồng cảm thấy được trân trọng, tin tưởng hơn và củng cố sự gắn kết về mặt tài chính và cảm xúc.',
            'Không ảnh hưởng gì đến sự tin tưởng.'
        ],
        correctAnswer: 'Sẽ giúp chồng cảm thấy được trân trọng, tin tưởng hơn và củng cố sự gắn kết về mặt tài chính và cảm xúc.',
        feedback: {
            correct: 'Chính xác! Sự minh bạch và công bằng trong tài chính là nền tảng vững chắc cho niềm tin và sự gắn kết trong hôn nhân.',
            incorrect: 'Chưa đúng. Sự thay đổi tích cực này sẽ giúp chồng cảm thấy được trân trọng, tin tưởng hơn và củng cố sự gắn kết về cả tài chính lẫn cảm xúc.'
        }
    },
    {
        question: 'Việc vợ chồng cùng nhau xây dựng mục tiêu chung cho tương lai (ví dụ: mua xe, giáo dục con) có ý nghĩa gì?',
        options: [
		    'Tạo động lực để cùng nhau phấn đấu, gắn kết và hướng tới một tương lai hạnh phúc, ổn định.',
            'Tạo thêm áp lực cho cả hai.',
            'Không cần thiết, mỗi người tự có mục tiêu riêng.',
            'Chỉ là để có cái để nói chuyện.'
        ],
        correctAnswer: 'Tạo động lực để cùng nhau phấn đấu, gắn kết và hướng tới một tương lai hạnh phúc, ổn định.',
        feedback: {
            correct: 'Chính xác! Mục tiêu chung giúp vợ chồng có định hướng, cùng nhau nỗ lực và củng cố sự gắn kết để xây dựng tương lai.',
            incorrect: 'Chưa đúng. Mục tiêu chung tạo động lực, sự gắn kết và giúp vợ chồng cùng nhau hướng tới một một tương lai hạnh phúc và ổn định.'
        }
    },
    {
        question: 'Khi vợ chồng đi đâu, làm gì đều phải nói rõ, không giấu giếm, điều đó sẽ tác động như thế nào đến mối quan hệ?',
        options: [
            'Làm mất đi sự tự do cá nhân.',
            'Tăng cường sự tin tưởng, giảm thiểu lo lắng và xây dựng một mối quan hệ minh bạch, an toàn.',
            'Không cần thiết nếu tin tưởng nhau tuyệt đối.',
            'Chỉ nên nói khi được hỏi.'
        ],
        correctAnswer: 'Tăng cường sự tin tưởng, giảm thiểu lo lắng và xây dựng một mối quan hệ minh bạch, an toàn.',
        feedback: {
            correct: 'Chính xác! Sự minh bạch trong lịch trình giúp củng cố niềm tin và tạo cảm giác an toàn cho cả hai trong mối quan hệ.',
            incorrect: 'Chưa đúng. Việc chia sẻ rõ ràng về lịch trình giúp tăng cường tin tưởng, giảm lo lắng và xây dựng mối quan hệ minh bạch, an toàn, không phải là mất tự do.'
        }
    },
    {
        question: 'Nếu một người vợ thường xuyên tỏ thái độ khó chịu khi chồng hỏi về các mối quan hệ bên ngoài, điều đó có thể dẫn đến hậu quả gì?',
        options: [
            'Chồng sẽ hiểu và không hỏi nữa.',
            'Khiến chồng cảm thấy không được tôn trọng, nghi ngờ và làm rạn nứt sự tin tưởng trong hôn nhân.',
            'Vợ đang bảo vệ không gian riêng tư.',
            'Không ảnh hưởng gì đến mối quan hệ.'
        ],
        correctAnswer: 'Khiến chồng cảm thấy không được tôn trọng, nghi ngờ và làm rạn nứt sự tin tưởng trong hôn nhân.',
        feedback: {
            correct: 'Chính xác! Thái độ khó chịu khi bị hỏi về những vấn đề nhạy cảm có thể làm suy yếu niềm tin và gây ra mâu thuẫn lớn.',
            incorrect: 'Chưa đúng. Thái độ khó chịu khi bị hỏi về các mối quan hệ có thể khiến chồng cảm thấy bị thiếu tôn trọng, nghi ngờ và làm rạn nứt niềm tin trong mối quan hệ.'
        }
    },
    {
        question: 'Khi cha mẹ không quan tâm nhiều đến con cái, thường xuyên to tiếng hoặc tạo áp lực cho con, điều đó sẽ dẫn đến hậu quả gì cho sự phát triển của con?',
        options: [
            'Con cái sẽ tự lập sớm và mạnh mẽ hơn.',
            'Con có thể trở nên tự ti, lo lắng, thiếu tự tin và khó hình thành mối quan hệ lành mạnh.',
            'Con sẽ học được cách chịu đựng áp lực.',
            'Không ảnh hưởng gì nhiều, trẻ con mau quên.'
        ],
        correctAnswer: 'Con có thể trở nên tự ti, lo lắng, thiếu tự tin và khó hình thành mối quan hệ lành mạnh.',
        feedback: {
            correct: 'Chính xác! Môi trường gia đình tiêu cực có thể gây ra những tổn thương tâm lý lâu dài cho trẻ, ảnh hưởng đến sự phát triển toàn diện của con.',
            incorrect: 'Chưa đúng. Việc thiếu quan tâm, to tiếng hoặc tạo áp lực có thể khiến con trở nên tự ti, lo lắng, thiếu tự tin và khó khăn trong việc xây dựng các mối quan hệ lành mạnh.'
        }
    },
    {
        question: 'Việc cha mẹ dành thời gian nói chuyện, tâm sự, lắng nghe con cái mỗi ngày sẽ mang lại kết quả ra sao?',
        options: [
            'Tốn thời gian và làm con ỷ lại.',
            'Tạo sự gắn kết sâu sắc, giúp con cảm thấy được thấu hiểu, an toàn và phát triển khả năng giao tiếp, giải quyết vấn đề.',
            'Con sẽ không còn nghe lời cha mẹ.',
            'Không cần thiết, chỉ cần lo cho con ăn học là đủ.'
        ],
        correctAnswer: 'Tạo sự gắn kết sâu sắc, giúp con cảm thấy được thấu hiểu, an toàn và phát triển khả năng giao tiếp, giải quyết vấn đề.',
        feedback: {
            correct: 'Chính xác! Giao tiếp và tâm sự là chìa khóa để xây dựng mối quan hệ vững chắc với con, giúp con phát triển toàn diện và cảm thấy được yêu thương.',
            incorrect: 'Chưa đúng. Dành thời gian nói chuyện và tâm sự với con giúp tạo sự gắn kết, thấu hiểu, an toàn và phát triển các kỹ năng quan trọng cho con, không phải làm con ỷ lại.'
        }
    },
    {
        question: 'Nếu vợ chồng cùng cam kết minh bạch về các mối quan hệ bên ngoài và không giấu diếm, điều đó sẽ xây dựng được điều gì trong hôn nhân?',
        options: [
            'Sự kiểm soát lẫn nhau.',
            'Niềm tin bền vững, sự an toàn và lòng tin tuyệt đối vào đối phương.',
            'Không cần thiết nếu không có gì để che giấu.',
            'Chỉ để tránh bị phát hiện.'
        ],
        correctAnswer: 'Niềm tin bền vững, sự an toàn và lòng tin tuyệt đối vào đối phương.',
        feedback: {
            correct: 'Chính xác! Sự minh bạch là nền tảng của niềm tin, giúp xây dựng một mối quan hệ an toàn và vững chắc.',
            incorrect: 'Chưa đúng. Sự minh bạch về các mối quan hệ bên ngoài giúp xây dựng niềm tin bền vững, sự an toàn và lòng tin tuyệt đối vào đối phương, không phải là sự kiểm soát.'
        }
    },
    {
        question: 'Tầm quan trọng của việc cha mẹ là tấm gương tốt cho con cái trong cách ứng xử vợ chồng là gì?',
        options: [
            'Không quan trọng, con cái sẽ tự học.',
            'Chỉ là để con cái không có cớ để trách móc.',
            'Là áp lực không cần thiết cho cha mẹ.',
			'Giúp con cái học được cách yêu thương, tôn trọng và giải quyết mâu thuẫn một cách lành mạnh, hình thành nền tảng cho các mối quan hệ tương lai của con.',
        ],
        correctAnswer: 'Giúp con cái học được cách yêu thương, tôn trọng và giải quyết mâu thuẫn một cách lành mạnh, hình thành nền tảng cho các mối quan hệ tương lai của con.',
        feedback: {
            correct: 'Chính xác! Cha mẹ là những người thầy đầu tiên của con, và cách ứng xử trong hôn nhân sẽ định hình cách con cái nhìn nhận và xây dựng các mối quan hệ của mình trong tương lai.',
            incorrect: 'Chưa đúng. Cha mẹ là tấm gương quan trọng nhất. Cách ứng xử vợ chồng ảnh hưởng sâu sắc đến việc con cái học cách yêu thương, tôn trọng và giải quyết mâu thuẫn, là nền tảng cho các mối quan hệ sau này.'
        }
    },
    {
        question: 'Khi nhìn vào những điểm tích cực của chồng mình, so với nhiều gia đình khác, điều đó giúp ích gì cho người vợ?',
        options: [
            'Giúp vợ cảm thấy tự hào về bản thân.',
            'Khiến vợ tự mãn và không còn cố gắng.',
			'Tăng cường sự trân trọng, lòng biết ơn và sự hài lòng với cuộc sống hôn nhân hiện tại.',
            'Không có ý nghĩa gì đặc biệt.'
        ],
        correctAnswer: 'Tăng cường sự trân trọng, lòng biết ơn và sự hài lòng với cuộc sống hôn nhân hiện tại.',
        feedback: {
            correct: 'Chính xác! Tập trung vào những điều tích cực giúp vun đắp tình cảm và sự hài lòng trong hôn nhân.',
            incorrect: 'Chưa đúng. Việc nhìn nhận điểm tích cực của chồng giúp tăng cường sự trân trọng, lòng biết ơn và sự hài lòng với cuộc sống hôn nhân, chứ không phải tự mãn.'
        }
    },
    {
        question: 'Việc chia sẻ và tâm sự với chồng nhiều hơn là với người ngoài mang lại lợi ích quan trọng nhất nào cho mối quan hệ vợ chồng?',
        options: [
            'Để chồng biết hết mọi chuyện của mình.',
            'Xây dựng sự gắn kết sâu sắc, niềm tin và sự thấu hiểu lẫn nhau, biến chồng thành người bạn thân thiết nhất.',
            'Để không phải tìm kiếm lời khuyên từ người khác.',
            'Khiến mối quan hệ trở nên nhàm chán.'
        ],
        correctAnswer: 'Xây dựng sự gắn kết sâu sắc, niềm tin và sự thấu hiểu lẫn nhau, biến chồng thành người bạn thân thiết nhất.',
        feedback: {
            correct: 'Chính xác! Chồng là người bạn đời, người bạn tâm giao quan trọng nhất, và việc chia sẻ mọi điều với anh ấy sẽ củng cố mối quan hệ.',
            incorrect: 'Chưa đúng. Chia sẻ với chồng nhiều hơn người ngoài giúp xây dựng sự gắn kết sâu sắc, niềm tin và sự thấu hiểu, biến chồng thành người bạn thân thiết nhất.'
        }
    },
    {
        question: 'Khi kiếm tiền, bạn có nhận ra rằng thành quả đó không chỉ đến từ nỗ lực của riêng mình mà còn có sự hỗ trợ từ gia đình (ông bà trông cháu, v.v.) không?',
        options: [
            'Không, đó là nỗ lực cá nhân của tôi.',
            'Có, và điều đó nhắc nhở tôi về lòng biết ơn, sự tôn trọng và trách nhiệm với gia đình.',
            'Đó là việc họ nên làm.',
            'Việc đó không liên quan đến thu nhập của tôi.'
        ],
        correctAnswer: 'Có, và điều đó nhắc nhở tôi về lòng biết ơn, sự tôn trọng và trách nhiệm với gia đình.',
        feedback: {
            correct: 'Chính xác! Ghi nhận và biết ơn sự hỗ trợ của gia đình là yếu tố quan trọng để xây dựng một tổ ấm bền vững và hạnh phúc.',
            incorrect: 'Chưa đúng. Việc nhận ra sự hỗ trợ của gia đình trong quá trình kiếm tiền giúp ta biết ơn, tôn trọng và có trách nhiệm hơn với gia đình, không chỉ là nỗ lực cá nhân.'
        }
    },
    {
        question: 'Nếu bạn áp dụng lòng biết ơn, sự tôn trọng và ghi nhớ những đóng góp của chồng, cũng như sẵn sàng sửa đổi những hành vi chưa phù hợp, điều đó sẽ tác động như thế nào đến hạnh phúc gia đình?',
        options: [
            'Sẽ mang lại sự hòa thuận, hạnh phúc bền vững, tăng cường tình yêu thương và sự gắn kết cho cả gia đình.',
			'Không tác động nhiều, vì mọi thứ đã quen thuộc.',
            'Khiến bạn cảm thấy mệt mỏi vì phải thay đổi.',
            'Chỉ là việc làm hình thức.'
        ],
        correctAnswer: 'Sẽ mang lại sự hòa thuận, hạnh phúc bền vững, tăng cường tình yêu thương và sự gắn kết cho cả gia đình.',
        feedback: {
            correct: 'Chính xác! Lòng biết ơn, sự tôn trọng và tinh thần cầu tiến là chìa khóa để xây dựng một gia đình hạnh phúc và một cuộc hôn nhân viên mãn.',
            incorrect: 'Chưa đúng. Lòng biết ơn, sự tôn trọng và sẵn sàng sửa đổi sẽ mang lại sự hòa thuận, hạnh phúc bền vững và tăng cường tình yêu thương, sự gắn kết cho gia đình.'
        }
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false; // Biến để kiểm tra xem đã trả lời câu hỏi hiện tại chưa

const questionArea = document.getElementById('question-area');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackTextElement = document.getElementById('feedback-text');
const resultArea = document.getElementById('result-area');
const correctCountElement = document.getElementById('correct-count');
const totalQuestionsElement = document.getElementById('total-questions');
const percentageTextElement = document.getElementById('percentage-text');
const feedbackTextOverallElement = document.getElementById('feedback-text-overall');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    answered = false; // Reset trạng thái đã trả lời cho câu hỏi mới
    feedbackTextElement.style.display = 'none'; // Ẩn phản hồi câu hỏi trước đó
    optionsContainer.innerHTML = ''; // Xóa các lựa chọn cũ

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionTextElement.textContent = currentQuestion.question;

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
    if (answered) return; // Nếu đã trả lời rồi thì không làm gì nữa
    answered = true; // Đánh dấu đã trả lời

    const optionButtons = optionsContainer.querySelectorAll('.option-button');
    let isCorrect = false;

    optionButtons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
        if (button.textContent === selectedOption) {
            if (selectedOption === correctAnswer) {
                isCorrect = true;
                score++;
            } else {
                button.classList.add('incorrect');
            }
        }
        button.disabled = true; // Vô hiệu hóa tất cả các nút sau khi chọn
    });

    displayFeedback(isCorrect, feedback);
}

function displayFeedback(isCorrect, feedback) {
    feedbackTextElement.textContent = isCorrect ? feedback.correct : feedback.incorrect;
    feedbackTextElement.className = ''; // Xóa các lớp cũ
    feedbackTextElement.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedbackTextElement.style.display = 'block'; // Hiển thị phản hồi

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 5000); // Tăng thời gian chờ lên 5 giây
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

// Tải câu hỏi đầu tiên khi trang được tải
document.addEventListener('DOMContentLoaded', loadQuestion);