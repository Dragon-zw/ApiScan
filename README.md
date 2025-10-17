# API 渗透测试平台

一个基于 React + Vite + Tailwind CSS 的 API 安全测试工具。

## 功能特性

- ✅ SQL 注入检测
- ✅ XSS 跨站脚本测试
- ✅ XXE 实体注入检测
- ✅ 命令注入测试
- ✅ 路径遍历检测
- ✅ 未授权访问测试
- ✅ 安全响应头检查
- ✅ SSL/TLS 验证

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

## Docker 部署

### 方式一：使用 Docker Compose（推荐）

```bash
# 构建并启动容器
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止容器
docker-compose down
```

访问 http://localhost:18080

### 方式二：使用 Docker 命令

```bash
# 构建镜像
docker build -t api-pentest-platform .

# 运行容器
docker run -d -p 18080:80 --name api-pentest-platform api-pentest-platform

# 查看日志
docker logs -f api-pentest-platform

# 停止容器
docker stop api-pentest-platform

# 删除容器
docker rm api-pentest-platform
```

## 技术栈

- React 18
- Vite
- Tailwind CSS
- Lucide React (图标库)
- Nginx (生产环境)

## 注意事项

⚠️ **重要提示**：此工具仅用于授权的安全测试，请遵守当地法律法规。未经授权对他人系统进行渗透测试是违法行为。

## 许可证

MIT License
