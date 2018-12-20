class MyApp {
    public static void main(String[] args) throws Exception {
        int i = 0;
        for (;;) {
            System.out.println(++i);
            Thread.sleep(1000);
        }
    }
}