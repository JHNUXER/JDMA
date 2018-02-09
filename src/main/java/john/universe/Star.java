public class Star {
  private static int s = 0;
  
  public String name = "Star";
  public String id = "star-";
  public ArrayList<World world> worlds = new ArrayList<World>();
  
  public float temp;
  public float size;
  public float brightness;
  public Type type = Type.STAR;
  
  public Star() {
    this.id += (s++);
  }
  
  public enum Type {
    STAR(1.989),NEUTRON_STAR(),BLACK_HOLE();
    
    public float density;
    
    public float getMass(Star star) {
      if (this == Type.BLACK_HOLE) return 1999999000f;
      else return this.density*(4f*(float)Math.PI*star.size*star.size*star.size)/3f;
    }
  }
}
